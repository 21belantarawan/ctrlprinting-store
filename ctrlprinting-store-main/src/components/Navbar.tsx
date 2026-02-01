import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Printer, Palette, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { config } from '@/data/products';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { to: '/', label: 'Beranda', icon: Home },
    { to: '/printing', label: 'Percetakan', icon: Printer },
    { to: '/design', label: 'Jasa Desain', icon: Palette },
    { to: '/about', label: 'Tentang', icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${isScrolled ? 'bg-card/95 backdrop-blur-lg shadow-sm border-b border-border' : 'bg-card/95 backdrop-blur-lg border-b border-border'}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={config.logo_url} 
              alt="CTRL+P Logo" 
              className="h-12 w-auto"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <Link 
            to="/cart" 
            className="relative p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden border-t border-border mt-3 pt-2 flex justify-around gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex flex-col items-center p-1.5 flex-1 transition-colors ${
                  isActive(link.to) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs mt-0.5">{link.label.split(' ')[0]}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
