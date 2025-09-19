import { Button } from "@/components/ui/button";
import { Gamepad2, Utensils, PartyPopper, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Entertainment venue with arcade games and VR stations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Play, Feast,{" "}
            <span className="bg-gradient-gaming bg-clip-text text-transparent">
              Celebrate
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            All in One Place — Arcade thrills, gourmet dining, and unforgettable parties
          </p>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            <Button 
              variant="secondary" 
              size="lg"
              className="flex flex-col items-center gap-2 h-24 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:shadow-glow-purple transition-all duration-300 group"
            >
              <Gamepad2 className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Explore Games</span>
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="flex flex-col items-center gap-2 h-24 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:shadow-glow-orange transition-all duration-300 group"
            >
              <Utensils className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">View Menu</span>
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="flex flex-col items-center gap-2 h-24 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:shadow-glow-purple transition-all duration-300 group"
            >
              <PartyPopper className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Plan Event</span>
            </Button>
            
            <Button 
              variant="default" 
              size="lg"
              className="flex flex-col items-center gap-2 h-24 bg-gradient-gaming text-white hover:shadow-glow-orange hover:scale-105 transition-all duration-300 group"
            >
              <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Book Now</span>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;