import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Food = () => {
  const menuItems = {
    snacks: [
      { name: "Loaded Nachos", price: "$8", description: "Crispy chips with cheese, jalapeños, and sour cream" },
      { name: "Mozzarella Sticks", price: "$7", description: "Golden fried cheese sticks with marinara sauce" },
      { name: "Wings", price: "$12", description: "Buffalo or BBQ wings with celery and blue cheese" },
      { name: "Popcorn", price: "$4", description: "Fresh buttery popcorn" }
    ],
    mains: [
      { name: "GameZone Burger", price: "$14", description: "Double patty with cheese, lettuce, and special sauce" },
      { name: "Supreme Pizza", price: "$16", description: "Pepperoni, sausage, peppers, and mushrooms" },
      { name: "Chicken Pasta", price: "$13", description: "Grilled chicken with alfredo sauce" },
      { name: "Fish & Chips", price: "$15", description: "Beer-battered fish with crispy fries" }
    ],
    desserts: [
      { name: "Chocolate Brownie", price: "$6", description: "Warm brownie with vanilla ice cream" },
      { name: "Milkshake", price: "$5", description: "Vanilla, chocolate, or strawberry" },
      { name: "Ice Cream Sundae", price: "$7", description: "Three scoops with toppings" },
      { name: "Churros", price: "$6", description: "Cinnamon sugar churros with chocolate sauce" }
    ],
    drinks: [
      { name: "Soft Drinks", price: "$3", description: "Coke, Pepsi, Sprite, and more" },
      { name: "Energy Drinks", price: "$4", description: "Red Bull, Monster, and gaming fuel" },
      { name: "Fresh Juices", price: "$4", description: "Orange, apple, or cranberry" },
      { name: "Coffee", price: "$3", description: "Hot or iced coffee" }
    ]
  };

  const combos = [
    {
      name: "Gamer's Combo",
      price: "$18",
      description: "Burger + Fries + Drink + 20 Game Credits",
      popular: true
    },
    {
      name: "Family Feast",
      price: "$45",
      description: "2 Pizzas + Wings + 4 Drinks + Bowling Lane (1hr)",
      popular: false
    },
    {
      name: "VR Experience Meal",
      price: "$25",
      description: "Any Main + Dessert + Drink + VR Session",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">{/* Add bottom padding on mobile for nav */}
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-food text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Delicious Food</h1>
            <p className="text-xl md:text-2xl mb-8">Fuel your fun with our amazing menu</p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Order Now
            </Button>
          </div>
        </section>

        {/* Special Combos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Special Combos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {combos.map((combo, index) => (
                <Card key={index} className={`hover:shadow-accent transition-all duration-300 hover:scale-105 ${combo.popular ? 'ring-2 ring-brand-gold' : ''}`}>
                  <CardHeader>
                    {combo.popular && (
                      <div className="bg-gradient-gaming text-white px-3 py-1 rounded-full text-sm font-bold w-fit mb-2">
                        Most Popular
                      </div>
                    )}
                    <CardTitle className="text-xl">{combo.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{combo.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-brand-purple">{combo.price}</span>
                      <Button className="bg-gradient-gaming text-white">Order Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Full Menu</h2>
            <Tabs defaultValue="snacks" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="snacks">Snacks</TabsTrigger>
                <TabsTrigger value="mains">Mains</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
                <TabsTrigger value="drinks">Drinks</TabsTrigger>
              </TabsList>

              {Object.entries(menuItems).map(([category, items]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                      <Card key={index} className="hover:shadow-accent transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <span className="text-xl font-bold text-brand-purple">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Food;