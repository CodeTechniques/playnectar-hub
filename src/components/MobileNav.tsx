import { useLocation, Link } from "react-router-dom";
import { Home, Gamepad2, UtensilsCrossed, PartyPopper, Phone } from "lucide-react";

const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Gamepad2, label: "Gaming", path: "/gaming" },
    { icon: UtensilsCrossed, label: "Food", path: "/food" },
    { icon: PartyPopper, label: "Events", path: "/celebrations" },
    { icon: Phone, label: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive 
                  ? "text-brand-purple bg-secondary/50" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-brand-purple" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-gaming"></div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;