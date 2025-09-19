import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Target, Zap, Users, Trophy, Star } from "lucide-react";

const GamingZone = () => {
  const games = [
    {
      title: "Arcade Games",
      description: "Classic games, big prizes! Test your skills on air hockey, basketball shootout, and more.",
      icon: <Target className="h-8 w-8" />,
      features: ["50+ Classic Games", "Ticket Prizes", "Ages 6+"],
      pricing: "$1-3 per play",
      gradient: "bg-gradient-gaming",
    },
    {
      title: "Bowling Alley", 
      description: "Strike up fun for all ages! Glow-in-the-dark lanes with automated scoring.",
      icon: <Trophy className="h-8 w-8" />,
      features: ["8 Modern Lanes", "Group Play", "Kids Bumpers"],
      pricing: "$20/lane/hour",
      gradient: "bg-gradient-food",
    },
    {
      title: "VR Games",
      description: "Step into the game! Immersive experiences with cutting-edge VR technology.",
      icon: <Zap className="h-8 w-8" />,
      features: ["Latest VR Tech", "Multiplayer Games", "Ages 12+"],
      pricing: "$15 per session",
      gradient: "bg-gradient-celebration",
    },
  ];

  const popularGames = [
    { name: "VR Zombie Survival", rating: 5, age: "12+" },
    { name: "Air Hockey Championship", rating: 4.8, age: "6+" },
    { name: "Racing Simulators", rating: 4.9, age: "8+" },
    { name: "Dance Revolution", rating: 4.7, age: "All Ages" },
  ];

  return (
    <section id="gaming" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gaming <span className="bg-gradient-gaming bg-clip-text text-transparent">Zone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From classic arcades to cutting-edge VR — we've got the thrills you're looking for
          </p>
        </div>

        {/* Gaming Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <Card key={index} className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-gaming hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${game.gradient} flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {game.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{game.title}</CardTitle>
                <CardDescription className="text-base">{game.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {game.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-lg text-primary">{game.pricing}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Games */}
        <div className="bg-gradient-to-r from-secondary/50 to-accent/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">Most Popular Games</h3>
            <p className="text-muted-foreground">See what everyone's talking about</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {popularGames.map((game, index) => (
              <div key={index} className="bg-background rounded-lg p-4 text-center hover:shadow-accent transition-shadow duration-200">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(game.rating) ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">{game.rating}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{game.name}</h4>
                <p className="text-sm text-muted-foreground">{game.age}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-gaming text-white hover:shadow-glow-orange hover:scale-105 transition-all duration-300"
          >
            <Gamepad2 className="mr-2 h-5 w-5" />
            See All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamingZone;