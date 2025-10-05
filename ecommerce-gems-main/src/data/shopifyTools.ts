import { shopifyToolsExtended } from './shopifyToolsExtended';

export const shopifyToolsData = [
  {
    id: "1",
    name: "Oberlo",
    website: "https://www.oberlo.com",
    description: "Dropshipping app that allows you to find products to sell online, add them to your Shopify store, and ship directly to customers.",
    howItWorks: "Connect your Shopify store, browse products from suppliers, import with one click, and automate order fulfillment.",
    purpose: "Simplify dropshipping by automating product sourcing and order processing.",
    monetization: "Free plan available, Premium from $29.90/month",
    features: [
      "One-click product import",
      "Automated order fulfillment",
      "Real-time inventory updates",
      "Product customization tools"
    ],
    tips: "Start with trending products and test multiple suppliers to find the most reliable ones.",
    category: "dropshipping",
    rating: 4
  },
  {
    id: "2",
    name: "Klaviyo",
    website: "https://www.klaviyo.com",
    description: "Advanced email marketing and SMS platform designed specifically for e-commerce businesses.",
    howItWorks: "Integrate with Shopify to sync customer data, create targeted segments, and automate personalized email campaigns.",
    purpose: "Drive sales through sophisticated email marketing automation and customer segmentation.",
    monetization: "Free up to 250 contacts, Paid plans from $20/month",
    features: [
      "Advanced segmentation",
      "A/B testing capabilities",
      "Abandoned cart recovery",
      "SMS marketing integration"
    ],
    tips: "Use behavioral triggers and dynamic content to increase email engagement rates.",
    category: "marketing",
    rating: 5
  },
  {
    id: "3",
    name: "Gorgias",
    website: "https://www.gorgias.com",
    description: "Helpdesk designed for e-commerce stores that centralizes all customer communications.",
    howItWorks: "Connects all support channels (email, chat, social media) into one dashboard with Shopify order data.",
    purpose: "Provide excellent customer service while reducing response time and increasing efficiency.",
    monetization: "From $60/month for small teams",
    features: [
      "Unified inbox for all channels",
      "Macros and automation rules",
      "Revenue statistics per ticket",
      "Deep Shopify integration"
    ],
    tips: "Set up macros for common questions to save 30-50% of support time.",
    category: "customer-service",
    rating: 5
  },
  {
    id: "4",
    name: "PageFly",
    website: "https://pagefly.io",
    description: "Drag-and-drop page builder for creating custom landing pages, product pages, and blog posts.",
    howItWorks: "Visual editor with pre-built templates and elements that you can customize without coding.",
    purpose: "Create high-converting, professional-looking pages without technical skills.",
    monetization: "Free plan available, Paid from $24/month",
    features: [
      "100+ page templates",
      "Mobile responsive design",
      "A/B testing tools",
      "SEO optimization features"
    ],
    tips: "Use the analytics feature to track page performance and optimize conversions.",
    category: "design",
    rating: 4
  },
  {
    id: "5",
    name: "Privy",
    website: "https://www.privy.com",
    description: "Email capture and conversion optimization tool with popups, banners, and spin-to-win wheels.",
    howItWorks: "Create targeted popups and email capture forms based on visitor behavior and segments.",
    purpose: "Grow email list and reduce cart abandonment through targeted onsite campaigns.",
    monetization: "Free up to 100 contacts, Paid from $30/month",
    features: [
      "Exit-intent popups",
      "Spin-to-win campaigns",
      "Cart abandonment tools",
      "A/B testing"
    ],
    tips: "Use exit-intent popups with discount codes to capture leaving visitors.",
    category: "marketing",
    rating: 4
  },
  {
    id: "6",
    name: "Lucky Orange",
    website: "https://www.luckyorange.com",
    description: "Conversion optimization tool with heatmaps, session recordings, and live chat.",
    howItWorks: "Install tracking code to record visitor sessions and generate heatmaps showing user behavior.",
    purpose: "Understand how visitors interact with your store to identify and fix conversion issues.",
    monetization: "From $32/month",
    features: [
      "Session recordings",
      "Dynamic heatmaps",
      "Conversion funnels",
      "Form analytics"
    ],
    tips: "Focus on pages with high bounce rates first to maximize impact.",
    category: "analytics",
    rating: 5
  },
  {
    id: "7",
    name: "Inventory Planner",
    website: "https://www.inventory-planner.com",
    description: "Forecasting and inventory management software that prevents stockouts and reduces excess inventory.",
    howItWorks: "Analyzes sales data to predict demand and automatically creates purchase orders.",
    purpose: "Optimize inventory levels to maximize cash flow and prevent lost sales.",
    monetization: "From $99.99/month",
    features: [
      "Demand forecasting",
      "Automated purchasing",
      "Multi-location inventory",
      "Performance reporting"
    ],
    tips: "Set up automatic reorder points based on lead times and sales velocity.",
    category: "inventory",
    rating: 4
  },
  {
    id: "8",
    name: "SEO Manager",
    website: "https://apps.shopify.com/seo-manager",
    description: "Comprehensive SEO tool for Shopify stores with real-time feedback and optimization suggestions.",
    howItWorks: "Scans your store for SEO issues and provides step-by-step fixes with real-time verification.",
    purpose: "Improve search engine rankings and organic traffic to your store.",
    monetization: "$20/month",
    features: [
      "SEO issue scanner",
      "Meta tag templates",
      "Structured data markup",
      "Broken link checker"
    ],
    tips: "Focus on product page SEO first as they typically drive the most organic traffic.",
    category: "seo",
    rating: 4
  },
  {
    id: "9",
    name: "ReConvert",
    website: "https://www.reconvert.com",
    description: "Post-purchase upsell app that creates customized thank you pages with product recommendations.",
    howItWorks: "Replace default order confirmation page with optimized upsell funnels and cross-sells.",
    purpose: "Increase average order value through post-purchase upsells when customers are most engaged.",
    monetization: "Free plan available, Paid from $7.99/month",
    features: [
      "One-click upsells",
      "Birthday collectors",
      "Product recommendations",
      "Order tracking widgets"
    ],
    tips: "Offer complementary products at 10-20% discount for best conversion rates.",
    category: "marketing",
    rating: 5
  },
  {
    id: "10",
    name: "Smile.io",
    website: "https://smile.io",
    description: "Loyalty and rewards program app that helps build customer retention.",
    howItWorks: "Create point-based rewards system where customers earn points for purchases and actions.",
    purpose: "Increase customer lifetime value through loyalty programs and repeat purchases.",
    monetization: "Free plan available, Paid from $49/month",
    features: [
      "Points program",
      "VIP tiers",
      "Referral program",
      "Email integrations"
    ],
    tips: "Make earning the first reward easy to encourage program participation.",
    category: "marketing",
    rating: 4
  },
  {
    id: "11",
    name: "Loox",
    website: "https://loox.io",
    description: "Photo reviews app that collects and displays customer photos and reviews.",
    howItWorks: "Automatically requests photo reviews from customers and displays them on product pages.",
    purpose: "Build social proof and trust through authentic customer photos and reviews.",
    monetization: "From $9.99/month",
    features: [
      "Photo review requests",
      "Review widgets",
      "Referral rewards",
      "Multi-language support"
    ],
    tips: "Offer incentives for photo reviews to increase submission rates.",
    category: "marketing",
    rating: 5
  },
  {
    id: "12",
    name: "Printful",
    website: "https://www.printful.com",
    description: "Print-on-demand dropshipping service for custom products like t-shirts, mugs, and posters.",
    howItWorks: "Design products, sync with Shopify, and Printful handles printing and shipping when orders come in.",
    purpose: "Sell custom products without inventory or upfront costs.",
    monetization: "Free to use, pay only for products + shipping",
    features: [
      "Product mockup generator",
      "Global fulfillment network",
      "White-label shipping",
      "Sample ordering"
    ],
    tips: "Order samples first to ensure quality meets your standards.",
    category: "dropshipping",
    rating: 5
  },
  {
    id: "13",
    name: "Tidio",
    website: "https://www.tidio.com",
    description: "Live chat and chatbot platform for customer service automation.",
    howItWorks: "Add live chat widget to store and create chatbots for common questions and sales.",
    purpose: "Provide instant customer support and increase conversions through proactive chat.",
    monetization: "Free plan available, Paid from $18/month",
    features: [
      "Live chat widget",
      "AI chatbots",
      "Visitor tracking",
      "Email integration"
    ],
    tips: "Set up chatbots for FAQ and use live chat for complex queries.",
    category: "customer-service",
    rating: 4
  },
  {
    id: "14",
    name: "Instant Search+",
    website: "https://apps.shopify.com/instant-search",
    description: "Smart search bar with instant results, filters, and product suggestions.",
    howItWorks: "Replaces default search with AI-powered instant search showing products as customers type.",
    purpose: "Help customers find products faster and increase conversion rates.",
    monetization: "From $8/month",
    features: [
      "Instant search results",
      "Smart filters",
      "Search analytics",
      "Typo tolerance"
    ],
    tips: "Analyze search terms to identify products customers want but can't find.",
    category: "design",
    rating: 4
  },
  {
    id: "15",
    name: "Back in Stock",
    website: "https://backinstock.org",
    description: "Restock alert app that notifies customers when out-of-stock items return.",
    howItWorks: "Customers sign up for alerts on product pages and receive automatic notifications when items restock.",
    purpose: "Recover lost sales from stockouts and gauge demand for products.",
    monetization: "From $19/month",
    features: [
      "Email/SMS alerts",
      "Demand reports",
      "Custom forms",
      "Analytics dashboard"
    ],
    tips: "Use demand data to inform inventory purchasing decisions.",
    category: "inventory",
    rating: 4
  },
  {
    id: "16",
    name: "AfterShip",
    website: "https://www.aftership.com",
    description: "Shipment tracking solution that keeps customers informed about their orders.",
    howItWorks: "Automatically tracks shipments from 800+ carriers and sends branded tracking updates.",
    purpose: "Reduce support tickets and improve customer experience with proactive shipping updates.",
    monetization: "Free for 50 shipments/month, Paid from $9/month",
    features: [
      "Branded tracking page",
      "Email/SMS notifications",
      "Returns management",
      "Delivery estimates"
    ],
    tips: "Use branded tracking pages to promote new products and offers.",
    category: "customer-service",
    rating: 5
  },
  {
    id: "17",
    name: "Bold Upsell",
    website: "https://boldcommerce.com",
    description: "AI-powered upsell and cross-sell app that increases average order value.",
    howItWorks: "Creates targeted product recommendations and bundles based on customer behavior.",
    purpose: "Maximize revenue per customer through intelligent product suggestions.",
    monetization: "From $9.99/month",
    features: [
      "AI recommendations",
      "Product bundles",
      "In-cart upsells",
      "A/B testing"
    ],
    tips: "Test different offer types to find what resonates with your audience.",
    category: "marketing",
    rating: 4
  },
  {
    id: "18",
    name: "Plug in SEO",
    website: "https://apps.shopify.com/plug-in-seo",
    description: "SEO audit tool that identifies and helps fix SEO problems in your store.",
    howItWorks: "Runs automated SEO checks and provides detailed fix instructions with priority levels.",
    purpose: "Improve search rankings by systematically fixing SEO issues.",
    monetization: "Free plan available, Paid from $20/month",
    features: [
      "SEO problem detection",
      "Fix instructions",
      "Progress tracking",
      "Bulk editing tools"
    ],
    tips: "Fix high-priority issues first for maximum SEO impact.",
    category: "seo",
    rating: 4
  },
  {
    id: "19",
    name: "Wheelio",
    website: "https://wheelio-app.com",
    description: "Gamified popup wheel for email capture and discount distribution.",
    howItWorks: "Visitors spin a wheel to win discounts in exchange for their email address.",
    purpose: "Grow email list while creating engaging experience that increases conversions.",
    monetization: "From $14.92/month",
    features: [
      "Customizable wheel",
      "Exit intent trigger",
      "Mobile optimized",
      "Analytics dashboard"
    ],
    tips: "Use during holiday seasons for maximum engagement.",
    category: "marketing",
    rating: 4
  },
  {
    id: "20",
    name: "Stocky",
    website: "https://www.stocky.com",
    description: "Free inventory management app by Shopify for managing stock across locations.",
    howItWorks: "Track inventory, create purchase orders, and forecast demand across multiple locations.",
    purpose: "Streamline inventory management for stores with complex inventory needs.",
    monetization: "Free",
    features: [
      "Multi-location inventory",
      "Purchase orders",
      "Demand forecasting",
      "Stocktake features"
    ],
    tips: "Perfect for stores transitioning from single to multi-location operations.",
    category: "inventory",
    rating: 4
  },
  ...shopifyToolsExtended
];