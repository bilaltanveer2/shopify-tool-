import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, FileText, DollarSign, Package, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountryGuide from "@/components/CountryGuide";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";
import { dropshippingTools } from "@/data/dropshippingData";
import { countryGuides } from "@/data/countryGuidesData";

const Dropshipping = () => {
  const [selectedCountry, setSelectedCountry] = useState("ksa");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pastel-pink/10 to-pastel-peach/10">
      {/* Header */}
      <header className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Dropshipping Hub</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dropshipping Tools & Country Guides
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to start and scale your dropshipping business in KSA, UAE, and Pakistan
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="tools">Dropshipping Tools</TabsTrigger>
            <TabsTrigger value="guides">Country Guides</TabsTrigger>
          </TabsList>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dropshippingTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          </TabsContent>

          {/* Country Guides Tab */}
          <TabsContent value="guides" className="space-y-8">
            {/* Country Selector */}
            <div className="flex justify-center gap-4 mb-8">
              {Object.keys(countryGuides).map((country) => (
                <Button
                  key={country}
                  variant={selectedCountry === country ? "gradient" : "outline"}
                  onClick={() => setSelectedCountry(country)}
                  className="min-w-[120px]"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  {country.toUpperCase()}
                </Button>
              ))}
            </div>

            {/* Country Guide Content */}
            <CountryGuide guide={countryGuides[selectedCountry]} />
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

export default Dropshipping;