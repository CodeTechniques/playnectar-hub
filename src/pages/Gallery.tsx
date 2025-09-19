import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Image } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    { type: 'image', category: 'gaming', title: 'VR Adventure', thumbnail: '🎮', description: 'Players enjoying VR experiences' },
    { type: 'image', category: 'gaming', title: 'Arcade Action', thumbnail: '🕹️', description: 'Classic arcade gaming fun' },
    { type: 'image', category: 'celebrations', title: 'Birthday Party', thumbnail: '🎂', description: 'Amazing birthday celebration' },
    { type: 'video', category: 'gaming', title: 'Bowling Strike', thumbnail: '🎳', description: 'Perfect bowling strikes' },
    { type: 'image', category: 'food', title: 'Gourmet Burger', thumbnail: '🍔', description: 'Delicious food creations' },
    { type: 'image', category: 'celebrations', title: 'Corporate Event', thumbnail: '🏢', description: 'Team building success' },
    { type: 'video', category: 'gaming', title: 'Racing Thrills', thumbnail: '🏎️', description: 'High-speed racing action' },
    { type: 'image', category: 'food', title: 'Pizza Party', thumbnail: '🍕', description: 'Fresh hot pizzas' },
    { type: 'image', category: 'celebrations', title: 'Group Celebration', thumbnail: '🎉', description: 'Friends having fun together' },
    { type: 'video', category: 'gaming', title: 'Air Hockey Match', thumbnail: '🏒', description: 'Competitive air hockey' },
    { type: 'image', category: 'food', title: 'Milkshake Bar', thumbnail: '🥤', description: 'Colorful milkshake selection' },
    { type: 'image', category: 'gaming', title: 'Kids Gaming', thumbnail: '👦', description: 'Kids enjoying safe games' }
  ];

  const categories = ['all', 'gaming', 'celebrations', 'food'];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">{/* Add bottom padding on mobile for nav */}
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl mb-8">Memories from our amazing venue</p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Image className="w-4 h-4 mr-2" />
              View All Photos
            </Button>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <Card key={index} className="group hover:shadow-accent transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-0 relative overflow-hidden">
                    <div className="aspect-square bg-gradient-gaming flex items-center justify-center text-6xl relative">
                      {item.thumbnail}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      )}
                      <Badge 
                        className={`absolute top-2 left-2 ${
                          item.category === 'gaming' ? 'bg-brand-purple' :
                          item.category === 'celebrations' ? 'bg-brand-gold' :
                          'bg-brand-orange'
                        } text-white`}
                      >
                        {item.category}
                      </Badge>
                      {item.type === 'video' && (
                        <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                          <Play className="w-3 h-3 mr-1" />
                          Video
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Memories</h2>
            <p className="text-xl mb-8 text-muted-foreground">Tag us in your photos for a chance to be featured!</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="lg">
                📸 Instagram @gamezone
              </Button>
              <Button variant="outline" size="lg">
                📱 TikTok @gamezonefun
              </Button>
              <Button variant="outline" size="lg">
                📘 Facebook GameZone
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;