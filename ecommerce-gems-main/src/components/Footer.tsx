import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-card/50 backdrop-blur-sm border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/10.jpg" 
                alt="M.Bilal" 
                className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
              />
              <h3 className="font-bold text-lg">M.Bilal</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Your comprehensive resource for Shopify, dropshipping, and e-commerce tools tailored for Pakistan, KSA, and UAE markets.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shopify-tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Shopify Tools
                </Link>
              </li>
              <li>
                <Link to="/dropshipping" className="text-muted-foreground hover:text-primary transition-colors">
                  Dropshipping Guides
                </Link>
              </li>
              <li>
                <Link to="/ecommerce-tools" className="text-muted-foreground hover:text-primary transition-colors">
                  E-Commerce Tools
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                muhamadbilaltanvir@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +923705978907
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Islamabad, Pakistan
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a 
                href="https://facebook.com/m.bilal.digitalmarketer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-soft hover:bg-primary hover:text-white transition-all group"
                title="Follow us on Facebook"
              >
                <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/muhmmadbilal_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-soft hover:bg-primary hover:text-white transition-all group"
                title="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/923705978907" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-soft hover:bg-primary hover:text-white transition-all group"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
            
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-soft hover:bg-primary hover:text-white transition-all group"
                title="Connect with us on LinkedIn"
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-soft hover:bg-primary hover:text-white transition-all group"
                title="Subscribe to our YouTube channel"
              >
                <Youtube className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/bilaltanveer2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-soft hover:bg-primary hover:text-white transition-all group"
                title="Check out our GitHub"
              >
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 M.Bilal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;