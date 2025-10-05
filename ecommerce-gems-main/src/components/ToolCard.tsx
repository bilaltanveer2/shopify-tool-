import { ExternalLink, DollarSign, Zap, AlertCircle, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Tool {
  id: string;
  name: string;
  website: string;
  description: string;
  howItWorks: string;
  purpose: string;
  monetization: string;
  features: string[];
  tips: string;
  category: string;
  rating?: number;
}

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
  const getMonetizationColor = (monetization: string) => {
    if (monetization.toLowerCase().includes("free")) return "bg-pastel-mint/20 text-green-700 border-pastel-mint/40";
    if (monetization.toLowerCase().includes("freemium")) return "bg-pastel-blue/20 text-blue-700 border-pastel-blue/40";
    return "bg-pastel-peach/20 text-orange-700 border-pastel-peach/40";
  };

  return (
    <div 
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transform transition-all duration-300 hover:-translate-y-2 animate-fade-in relative overflow-hidden group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
            {tool.rating && (
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < tool.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            )}
          </div>
          <Badge className={`${getMonetizationColor(tool.monetization)}`}>
            {tool.monetization}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>

        {/* Info Boxes */}
        <div className="space-y-3 mb-4">
          {/* How it Works */}
          <div className="bg-primary-soft/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-primary">How it Works</span>
            </div>
            <p className="text-xs text-muted-foreground">{tool.howItWorks}</p>
          </div>

          {/* Purpose */}
          <div className="bg-accent-soft/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Info className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold">Purpose</span>
            </div>
            <p className="text-xs text-muted-foreground">{tool.purpose}</p>
          </div>

          {/* Features/Warnings */}
          {tool.features.length > 0 && (
            <div className="bg-secondary-soft/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="h-4 w-4 text-secondary-foreground" />
                <span className="text-xs font-semibold">Key Features</span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                {tool.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tips */}
          {tool.tips && (
            <div className="bg-pastel-lavender/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-xs font-semibold">Pro Tip</span>
              </div>
              <p className="text-xs text-muted-foreground italic">{tool.tips}</p>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          variant="gradient" 
          className="w-full group"
          onClick={() => window.open(tool.website, '_blank')}
        >
          Visit Website
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ToolCard;