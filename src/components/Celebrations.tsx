import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PartyPopper, Users, Briefcase, Heart, Star, Gift, Cake } from "lucide-react";
import partyCelebration from "@/assets/party-celebration.jpg";

const Celebrations = () => {
  const eventTypes = [
    {
      title: "Birthday Parties",
      description: "Make birthdays magical with games, food, and memories that last forever",
      icon: <Cake className="h-8 w-8" />,
      features: [
        "Dedicated party host",
        "Custom decorations",
        "Game packages included",
        "Birthday cake options",
        "Photo opportunities",
      ],
      pricing: "Starting at $200",
      gradient: "bg-gradient-celebration",
      popular: true,
    },
    {
      title: "Corporate Events",
      description: "Team-building activities that actually build teams while having fun",
      icon: <Briefcase className="h-8 w-8" />,
      features: [
        "Team-building games",
        "Meeting space with AV",
        "Custom catering menus",
        "Group activities",
        "Networking spaces",
      ],
      pricing: "Custom quotes",
      gradient: "bg-gradient-gaming",
      popular: false,
    },
    {
      title: "Special Events",
      description: "Anniversaries, graduations, or any celebration deserves our special touch",
      icon: <Heart className="h-8 w-8" />,
      features: [
        "Venue buyout options",
        "Custom themes",
        "Tailored packages",
        "Professional setup",
        "Exclusive access",
      ],
      pricing: "Starting at $500",
      gradient: "bg-gradient-food",
      popular: false,
    },
  ];

  const partyPackages = [
    {
      name: "Basic Bash",
      price: "$200",
      guests: "Up to 10 guests",
      duration: "2 hours",
      includes: ["Game credits", "Decorations", "Party host", "Reserved seating"],
    },
    {
      name: "Super Celebration", 
      price: "$350",
      guests: "Up to 20 guests",
      duration: "3 hours",
      includes: ["Everything in Basic", "Food package", "Custom cake", "Extended play time"],
      popular: true,
    },
    {
      name: "Ultimate Experience",
      price: "$500",
      guests: "Up to 30 guests", 
      duration: "4 hours",
      includes: ["Everything in Super", "VR sessions", "Premium decorations", "Party favors"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "My son's 10th birthday was absolutely perfect! The staff was amazing and the kids had a blast.",
    },
    {
      name: "Corporate Team - Tech Solutions Inc.",
      rating: 5, 
      text: "Best team building event we've ever had. Everyone participated and we actually bonded as a team.",
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "The graduation party exceeded all expectations. The venue was beautifully decorated!",
    },
  ];

  return (
    <section id="celebrations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Make Every <span className="bg-gradient-celebration bg-clip-text text-transparent">Celebration</span> Unforgettable
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From birthdays to corporate events — we create memories that last a lifetime
          </p>
          
          {/* Hero Celebration Image */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-gaming mb-8">
            <img
              src={partyCelebration}
              alt="Birthday party celebration with kids and VR headsets"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        {/* Event Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <Card key={index} className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-gaming hover:-translate-y-1">
              {event.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-gaming text-white">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${event.gradient} flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {event.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{event.title}</CardTitle>
                <CardDescription className="text-base">{event.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {event.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-lg text-primary">{event.pricing}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    Plan Your Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Party Packages */}
        <div className="bg-gradient-to-r from-secondary/50 to-accent/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">Birthday Party Packages</h3>
            <p className="text-muted-foreground">Choose the perfect celebration for your special day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partyPackages.map((pkg, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-accent transition-shadow duration-200 bg-background">
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-gaming text-white text-center py-2 text-sm font-medium">
                    Most Popular Choice
                  </div>
                )}
                
                <CardHeader className={pkg.popular ? "pt-12" : ""}>
                  <CardTitle className="text-2xl font-bold text-center">{pkg.name}</CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.guests} • {pkg.duration}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Gift className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  
                  <Button 
                    className={`w-full mt-6 ${pkg.popular 
                      ? 'bg-gradient-gaming text-white hover:shadow-glow-orange' 
                      : 'bg-primary hover:bg-primary/90'
                    } transition-all duration-300`}
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">What Our Guests Say</h3>
            <p className="text-muted-foreground">Real experiences from real celebrations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-accent transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-celebration text-white hover:shadow-glow-purple hover:scale-105 transition-all duration-300 mr-4"
          >
            <PartyPopper className="mr-2 h-5 w-5" />
            Start Planning Your Event
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Celebrations;