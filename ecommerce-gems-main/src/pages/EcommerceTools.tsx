import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";
import { ecommerceToolsByCountry } from "@/data/ecommerceToolsData";

const EcommerceTools = () => {
  const [selectedCountry, setSelectedCountry] = useState("pakistan");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pastel-mint/10 to-pastel-lavender/10">
      <header className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold gradient-text">E-Commerce Tools</h1>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Best E-Commerce Tools Beyond Shopify
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover top e-commerce platforms and tools tailored for Pakistan, KSA, and UAE markets
          </p>
        </div>

        <Tabs defaultValue="pakistan" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="pakistan">Pakistan</TabsTrigger>
            <TabsTrigger value="ksa">KSA</TabsTrigger>
            <TabsTrigger value="uae">UAE</TabsTrigger>
          </TabsList>

          {Object.keys(ecommerceToolsByCountry).map(country => (
            <TabsContent key={country} value={country} className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ecommerceToolsByCountry[country].map((tool, index) => (
                  <ToolCard key={tool.id} tool={tool} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceTools;