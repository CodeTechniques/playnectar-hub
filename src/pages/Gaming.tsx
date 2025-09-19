import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Target, Zap } from "lucide-react";

const Gaming = () => {
  const [activeTab, setActiveTab] = useState("all");

  const games = {
    arcade: [
      { name: "Air Hockey", price: "$2", age: "Ages 6+", icon: "🏒" },
      { name: "Basketball Shootout", price: "$1", age: "Ages 8+", icon: "🏀" },
      { name: "Racing Simulators", price: "$3", age: "Ages 10+", icon: "🏎️" },
      { name: "Claw Machine", price: "$1", age: "All Ages", icon: "🧸" }
    ],
    bowling: [
      { name: "Glow Bowling", price: "$20/lane/hour", age: "All Ages", icon: "🎳" },
      { name: "Kids Bumper Lanes", price: "$15/lane/hour", age: "Ages 3-10", icon: "🎯" }
    ],
    vr: [
      { name: "VR Roller Coaster", price: "$5", age: "Ages 12+", icon: "🎢" },
      { name: "Zombie Survival", price: "$6", age: "Ages 16+", icon: "🧟" },
      { name: "VR Sports", price: "$4", age: "Ages 10+", icon: "⚽" }
    ]
  };

  const allGames = [...games.arcade, ...games.bowling, ...games.vr];

  const getGamesToShow = () => {
    switch(activeTab) {
      case "arcade": return games.arcade;
      case "bowling": return games.bowling;
      case "vr": return games.vr;
      default: return allGames;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">{/* Add bottom padding on mobile for nav */}
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-gaming text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gaming Zone</h1>
            <p className="text-xl md:text-2xl mb-8">From classic arcades to cutting-edge VR — we've got it all!</p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Book Your Games Now
            </Button>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { id: "all", label: "All Games", icon: Gamepad2 },
                { id: "arcade", label: "Arcade", icon: Target },
                { id: "bowling", label: "Bowling", icon: "🎳" },
                { id: "vr", label: "VR Games", icon: Zap }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2"
                >
                  {typeof tab.icon === "string" ? (
                    <span className="text-xl">{tab.icon}</span>
                  ) : (
                    <tab.icon className="w-4 h-4" />
                  )}
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getGamesToShow().map((game, index) => (
                <Card key={index} className="hover:shadow-gaming transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{game.icon}</div>
                    <CardTitle className="text-xl">{game.name}</CardTitle>
                    <CardDescription>{game.age}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-brand-purple mb-4">{game.price}</div>
                    <Button className="w-full bg-gradient-gaming text-white">
                      Play Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gaming;