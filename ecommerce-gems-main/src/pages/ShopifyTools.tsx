import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Search, DollarSign, Zap, AlertCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";
import { shopifyToolsData } from "@/data/shopifyTools";

const ShopifyTools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredTools = shopifyToolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || tool.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "marketing", "analytics", "inventory", "customer-service", "design", "seo"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pastel-purple/10 to-pastel-blue/10">
      {/* Header */}
      <header className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Shopify Tools</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            20+ Essential Shopify Tools
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover the best tools to build, manage, and scale your Shopify store
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 rounded-xl bg-card/80 backdrop-blur-sm border-2"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map(category => (
              <Button
                key={category}
                variant={filterCategory === category ? "gradient" : "outline"}
                size="sm"
                onClick={() => setFilterCategory(category)}
                className="capitalize"
              >
                {category.replace("-", " ")}
              </Button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tools found matching your criteria.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default ShopifyTools;