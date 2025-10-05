import { FileText, DollarSign, Package, AlertTriangle, CheckCircle, TrendingUp, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CountryGuideData {
  country: string;
  flag: string;
  introduction: string;
  legalRequirements: string[];
  paymentGateways: {
    name: string;
    description: string;
    fees: string;
  }[];
  popularNiches: {
    niche: string;
    reason: string;
  }[];
  challenges: string[];
  tips: string[];
  howToStart: {
    step: number;
    title: string;
    description: string;
  }[];
  marketSize: string;
  internetPenetration: string;
  averageOrderValue: string;
}

interface CountryGuideProps {
  guide: CountryGuideData;
}

const CountryGuide = ({ guide }: CountryGuideProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Introduction Card */}
      <Card className="p-8 bg-gradient-card shadow-card">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl">{guide.flag}</span>
          <h3 className="text-3xl font-bold">{guide.country} E-Commerce Guide</h3>
        </div>
        
        <p className="text-lg text-muted-foreground mb-6">{guide.introduction}</p>
        
        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-primary-soft/50 rounded-lg p-4">
            <Globe className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-semibold">Market Size</p>
            <p className="text-lg font-bold text-primary">{guide.marketSize}</p>
          </div>
          <div className="bg-accent-soft/50 rounded-lg p-4">
            <Users className="h-5 w-5 text-accent mb-2" />
            <p className="text-sm font-semibold">Internet Users</p>
            <p className="text-lg font-bold text-accent">{guide.internetPenetration}</p>
          </div>
          <div className="bg-secondary-soft/50 rounded-lg p-4">
            <TrendingUp className="h-5 w-5 text-secondary-foreground mb-2" />
            <p className="text-sm font-semibold">Avg Order Value</p>
            <p className="text-lg font-bold text-secondary-foreground">{guide.averageOrderValue}</p>
          </div>
        </div>
      </Card>

      {/* Legal Requirements */}
      <Card className="p-6 card-hover">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-6 w-6 text-primary" />
          <h4 className="text-2xl font-bold">Legal Requirements</h4>
        </div>
        <ul className="space-y-3">
          {guide.legalRequirements.map((req, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{req}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Payment Gateways */}
      <Card className="p-6 card-hover">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-6 w-6 text-primary" />
          <h4 className="text-2xl font-bold">Payment Gateways</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {guide.paymentGateways.map((gateway, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-4">
              <h5 className="font-semibold mb-2">{gateway.name}</h5>
              <p className="text-sm text-muted-foreground mb-2">{gateway.description}</p>
              <Badge variant="secondary">{gateway.fees}</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Popular Niches */}
      <Card className="p-6 card-hover">
        <div className="flex items-center gap-2 mb-4">
          <Package className="h-6 w-6 text-primary" />
          <h4 className="text-2xl font-bold">Popular Niches & Products</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {guide.popularNiches.map((niche, index) => (
            <div key={index} className="bg-gradient-glass backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <h5 className="font-semibold text-primary mb-2">{niche.niche}</h5>
              <p className="text-sm text-muted-foreground">{niche.reason}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Challenges & Tips */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Challenges */}
        <Card className="p-6 card-hover">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <h4 className="text-xl font-bold">Challenges</h4>
          </div>
          <ul className="space-y-2">
            {guide.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-destructive">•</span>
                <span className="text-sm text-muted-foreground">{challenge}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Tips */}
        <Card className="p-6 card-hover">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h4 className="text-xl font-bold">Pro Tips</h4>
          </div>
          <ul className="space-y-2">
            {guide.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* How to Start - Step by Step */}
      <Card className="p-6">
        <h4 className="text-2xl font-bold mb-6">How to Start Dropshipping in {guide.country}</h4>
        <div className="space-y-4">
          {guide.howToStart.map((step, index) => (
            <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-primary text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
              </div>
              <div className="flex-1">
                <h5 className="font-semibold mb-1">{step.title}</h5>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CountryGuide;