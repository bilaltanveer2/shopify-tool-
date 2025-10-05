import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import ShopifyTools from "./pages/ShopifyTools";
import Dropshipping from "./pages/Dropshipping";
import EcommerceTools from "./pages/EcommerceTools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-hero">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shopify-tools" element={<ShopifyTools />} />
            <Route path="/dropshipping" element={<Dropshipping />} />
            <Route path="/ecommerce-tools" element={<EcommerceTools />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
