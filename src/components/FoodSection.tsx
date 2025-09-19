import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Coffee, IceCream, Pizza } from "lucide-react";
import foodSpread from "@/assets/food-spread.jpg";

const FoodSection = () => {
  const menuCategories = [
    {
      title: "Mains",
      description: "Hearty meals to fuel your gaming sessions",
      icon: <Pizza className="h-6 w-6" />,
      items: [
        { name: "GameZone Burger", price: "$12", description: "Juicy beef patty with all the fixings" },
        { name: "Loaded Nachos", price: "$10", description: "Crispy chips with cheese, jalapeños, and salsa" },
        { name: "Pepperoni Pizza", price: "$15", description: "Classic pizza perfect for sharing" },
      ],
      gradient: "from-brand-orange to-brand-red",
    },
    {
      title: "Snacks & Apps",
      description: "Quick bites between games",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        { name: "Mozzarella Sticks", price: "$8", description: "Golden fried cheese sticks with marinara" },
        { name: "Chicken Wings", price: "$10", description: "Choice of buffalo, BBQ, or garlic parmesan" },
        { name: "Onion Rings", price: "$6", description: "Crispy beer-battered rings" },
      ],
      gradient: "from-brand-gold to-brand-orange",
    },
    {
      title: "Drinks",
      description: "Refreshing beverages and specialty drinks", 
      icon: <Coffee className="h-6 w-6" />,
      items: [
        { name: "Power-Up Smoothies", price: "$6", description: "Energizing fruit blends in fun colors" },
        { name: "Gamer Fuel Slushies", price: "$4", description: "Bright blue and green slushies" },
        { name: "Craft Sodas", price: "$3", description: "Unique flavors you can't find anywhere else" },
      ],
      gradient: "from-brand-purple to-brand-gold",
    },
    {
      title: "Desserts",
      description: "Sweet treats to celebrate your wins",
      icon: <IceCream className="h-6 w-6" />,
      items: [
        { name: "Victory Sundae", price: "$7", description: "Three scoops with hot fudge and sprinkles" },
        { name: "Arcade Cookies", price: "$4", description: "Cookies shaped like game controllers" },
        { name: "Celebration Cake", price: "$25", description: "Custom cakes for special events" },
      ],
      gradient: "from-brand-red to-brand-purple",
    },
  ];

  const combos = [
    {
      name: "Play + Eat Combo",
      price: "$20",
      description: "20 arcade credits + choice of burger or pizza + drink",
      popular: true,
    },
    {
      name: "Family Feast",
      price: "$60", 
      description: "Serves 4-6 people with mains, sides, and drinks",
      popular: false,
    },
    {
      name: "Gamer's Delight",
      price: "$15",
      description: "Loaded nachos + 15 arcade credits + power-up smoothie",
      popular: true,
    },
  ];

  return (
    <section id="food" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fuel Your <span className="bg-gradient-food bg-clip-text text-transparent">Fun</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From quick bites to full meals — delicious food to keep you energized
          </p>
          
          {/* Hero Food Image */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-accent mb-8">
            <img
              src={foodSpread}
              alt="Delicious food spread with burgers, nachos, and drinks"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {menuCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-gaming transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                <CardDescription className="text-sm">{category.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {category.items.map((item, i) => (
                  <div key={i} className="border-b border-border last:border-b-0 pb-2 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm text-foreground">{item.name}</h4>
                      <span className="font-bold text-primary text-sm">{item.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Combos */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">Special Combo Deals</h3>
            <p className="text-muted-foreground">Save more when you play and eat together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {combos.map((combo, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-accent transition-shadow duration-200">
                {combo.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-gaming text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{combo.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{combo.price}</div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {combo.description}
                  </CardDescription>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-food text-white hover:shadow-glow-orange hover:scale-105 transition-all duration-300 mr-4"
          >
            <Utensils className="mr-2 h-5 w-5" />
            View Full Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Order Online
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;