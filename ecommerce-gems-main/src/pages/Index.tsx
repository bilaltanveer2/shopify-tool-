import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight, Sparkles, ShoppingBag, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      title: "Shopify Tools",
      description: "Discover 50+ essential tools to build and scale your Shopify store",
      icon: ShoppingBag,
      link: "/shopify-tools",
      color: "from-pastel-purple to-pastel-blue",
      count: "50+ Tools"
    },
    {
      title: "Dropshipping Tools & Guides",
      description: "Complete guides for KSA, UAE, and Pakistan with top dropshipping tools",
      icon: Globe,
      link: "/dropshipping",
      color: "from-pastel-pink to-pastel-peach",
      count: "3 Countries"
    },
    {
      title: "Other E-Commerce Tools",
      description: "Best e-commerce platforms and tools beyond Shopify",
      icon: Sparkles,
      link: "/ecommerce-tools",
      color: "from-pastel-mint to-pastel-lavender",
      count: "15+ Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-soft to-accent-soft">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              Top Shopify, Dropshipping & E-Commerce Tools
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
              Learn the best tools and guides for building your online business in Pakistan, KSA, and UAE.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8 animate-scale-in">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search tools, guides, or countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-14 rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary focus:border-primary transition-colors"
                />
              </div>
              <Button variant="gradient" size="xl" className="group">
                <Filter className="mr-2 h-5 w-5" />
                Filter Results
              </Button>
            </div>
            
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-float"
              onClick={() => document.getElementById('main-sections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <section id="main-sections" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Link
              key={section.title}
              to={section.link}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transform transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${section.color} mb-6`}>
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{section.count}</span>
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-muted-foreground">Everything you need to succeed in e-commerce</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Curated Tools", desc: "Hand-picked best tools" },
            { title: "Country Guides", desc: "Localized for your market" },
            { title: "Regular Updates", desc: "Always current information" },
            { title: "Expert Insights", desc: "Tips from professionals" }
          ].map((feature, i) => (
            <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center card-hover">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;