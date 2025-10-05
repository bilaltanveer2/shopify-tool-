import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  const location = useLocation();

  // Set dark mode as default on component mount
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark mode
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shopify Tools', path: '/shopify-tools' },
    { name: 'Dropshipping Guides', path: '/dropshipping' },
    { name: 'E-Commerce Tools', path: '/ecommerce-tools' },
    { name: 'Contact', path: '#contact' },
  ];

  const isActive = (path: string) => {
    if (path === '#contact') return false;
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 glass-effect backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 font-playfair text-xl font-bold gradient-text">
            <img 
              src="/bilal.png" 
              alt="E-Commerce Hub Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
            />
            <span className="shining-text">M.Bilal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-primary-soft text-primary shadow-soft'
                    : 'shining-text hover:bg-muted/50'
                }`}
                onClick={(e) => {
                  if (link.path === '#contact') {
                    e.preventDefault();
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted/50"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-soft to-accent-soft flex items-center justify-center shadow-soft hover:shadow-hover transition-shadow cursor-pointer">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-muted/50 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-primary-soft text-primary shadow-soft'
                      : 'shining-text hover:bg-muted/50'
                  }`}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.path === '#contact') {
                      e.preventDefault();
                      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-muted-foreground">Theme</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full hover:bg-muted/50"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-muted-foreground">Profile</span>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-soft to-accent-soft flex items-center justify-center shadow-soft">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}