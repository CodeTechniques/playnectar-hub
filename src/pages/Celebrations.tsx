import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Cake, Building } from "lucide-react";

const CelebrationsPage = () => {
  const eventTypes = [
    {
      title: "Birthday Parties",
      icon: <Cake className="w-8 h-8" />,
      description: "Make birthdays unforgettable with games, food, and fun!",
      features: ["Custom decorations", "Birthday cake included", "Game packages", "Private party area", "Dedicated host"],
      startingPrice: "$199",
      popular: true
    },
    {
      title: "Corporate Events",
      icon: <Building className="w-8 h-8" />,
      description: "Team building events that actually build teams.",
      features: ["Meeting room with AV", "Team challenges", "Catering options", "Professional setup", "Custom branding"],
      startingPrice: "$299",
      popular: false
    },
    {
      title: "Private Events",
      icon: <Users className="w-8 h-8" />,
      description: "Exclusive venue rental for your special occasion.",
      features: ["Full venue access", "Custom themes", "Unlimited games", "Premium catering", "Photography service"],
      startingPrice: "$499",
      popular: false
    }
  ];

  const packages = [
    {
      name: "Essential Party",
      price: "$199",
      guests: "Up to 10 guests",
      duration: "2 hours",
      includes: ["Game credits for all guests", "Party host", "Basic decorations", "Soft drinks included"]
    },
    {
      name: "Ultimate Celebration", 
      price: "$349",
      guests: "Up to 20 guests",
      duration: "3 hours",
      includes: ["Premium game package", "VR experiences", "Full meal service", "Custom cake", "Photo package"],
      popular: true
    },
    {
      name: "VIP Experience",
      price: "$599",
      guests: "Up to 30 guests",
      duration: "4 hours",
      includes: ["Private venue section", "Unlimited games", "Premium catering", "Dedicated photographer", "Custom theming"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">{/* Add bottom padding on mobile for nav */}
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-celebration text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Celebrations</h1>
            <p className="text-xl md:text-2xl mb-8">Turn any day into a celebration!</p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Calendar className="w-4 h-4 mr-2" />
              Plan Your Event
            </Button>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventTypes.map((event, index) => (
                <Card key={index} className={`hover:shadow-accent transition-all duration-300 hover:scale-105 ${event.popular ? 'ring-2 ring-brand-gold' : ''}`}>
                  <CardHeader className="text-center">
                    {event.popular && (
                      <Badge className="bg-gradient-gaming text-white mb-2 w-fit mx-auto">
                        Most Popular
                      </Badge>
                    )}
                    <div className="text-brand-purple mb-4 flex justify-center">{event.icon}</div>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                    <CardDescription className="text-lg">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {event.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-brand-purple rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <span className="text-2xl font-bold text-brand-purple">{event.startingPrice}</span>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-gaming text-white">
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Party Packages */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Party Packages</h2>
            <p className="text-center text-muted-foreground mb-12">Choose the perfect package for your celebration</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`hover:shadow-accent transition-all duration-300 ${pkg.popular ? 'ring-2 ring-brand-gold scale-105' : ''}`}>
                  <CardHeader className="text-center">
                    {pkg.popular && (
                      <Badge className="bg-gradient-gaming text-white mb-2 w-fit mx-auto">
                        Most Popular
                      </Badge>
                    )}
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-brand-purple my-2">{pkg.price}</div>
                    <CardDescription>
                      <div className="flex flex-col gap-1">
                        <span>{pkg.guests}</span>
                        <span>{pkg.duration}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {pkg.includes.map((item, i) => (
                        <div key={i} className="flex items-start text-sm">
                          <span className="w-2 h-2 bg-brand-purple rounded-full mr-3 mt-2"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full ${pkg.popular ? 'bg-gradient-gaming text-white' : ''}`}>
                      Select Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Event?</h2>
            <p className="text-xl mb-8 text-muted-foreground">Let's make your celebration unforgettable!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gaming text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
              <Button size="lg" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CelebrationsPage;