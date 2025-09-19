import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Gaming Zone", href: "#gaming" },
    { name: "Food Menu", href: "#food" },
    { name: "Celebrations", href: "#celebrations" },
    { name: "Book Now", href: "#book" },
  ];

  const gameLinks = [
    { name: "Arcade Games", href: "#arcade" },
    { name: "Bowling Alley", href: "#bowling" },
    { name: "VR Experiences", href: "#vr" },
    { name: "All Games", href: "#all-games" },
  ];

  const eventLinks = [
    { name: "Birthday Parties", href: "#birthdays" },
    { name: "Corporate Events", href: "#corporate" },
    { name: "Custom Events", href: "#custom" },
    { name: "Group Packages", href: "#packages" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              GameZone
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate entertainment destination where friends and families come together 
              to play, feast, and celebrate life's special moments.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Entertainment Blvd, Fun City, FC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@gamezone.com" className="hover:text-primary transition-colors">
                  info@gamezone.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gaming */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Gaming</h3>
            <ul className="space-y-3">
              {gameLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Events</h3>
            <ul className="space-y-3">
              {eventLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay in the Game</h3>
              <p className="text-sm text-muted-foreground">
                Get exclusive offers and event updates delivered to your inbox
              </p>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="md:w-64"
              />
              <Button 
                className="bg-gradient-gaming text-white hover:shadow-glow-orange transition-all duration-300"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 GameZone Entertainment. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a 
                href="#privacy" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;