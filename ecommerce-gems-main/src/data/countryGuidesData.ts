export const countryGuides: Record<string, any> = {
  ksa: {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    introduction: "Saudi Arabia represents one of the largest e-commerce markets in the Middle East with a tech-savvy population and high purchasing power.",
    legalRequirements: [
      "Commercial Registration (CR) from Ministry of Commerce",
      "VAT registration for businesses exceeding SAR 375,000 annual revenue",
      "Maroof certification for e-commerce credibility",
      "Compliance with Saudi Data & AI Authority (SDAIA) regulations"
    ],
    paymentGateways: [
      { name: "PayTabs", description: "Popular local gateway with multi-currency support", fees: "2.9% + SAR 1.2" },
      { name: "Moyasar", description: "Saudi-focused with Apple Pay and mada support", fees: "2.5% + SAR 1" },
      { name: "Tap Payments", description: "Regional leader with extensive features", fees: "2.8% + SAR 1" },
      { name: "STC Pay", description: "Digital wallet widely used in KSA", fees: "2.0% for merchants" }
    ],
    popularNiches: [
      { niche: "Fashion & Beauty", reason: "High demand for international brands and modest fashion" },
      { niche: "Electronics", reason: "Tech-savvy population with high smartphone penetration" },
      { niche: "Home & Living", reason: "Growing real estate market drives home decor demand" },
      { niche: "Health & Fitness", reason: "Vision 2030 promotes healthy lifestyle initiatives" }
    ],
    challenges: [
      "Cash on delivery still preferred by 60% of customers",
      "Complex customs procedures for international shipments",
      "Need for Arabic language support",
      "Seasonal fluctuations during Ramadan and Hajj"
    ],
    tips: [
      "Offer Arabic customer support for trust building",
      "Partner with local logistics companies like SMSA or Zajil",
      "Consider Ramadan-specific marketing campaigns",
      "Implement mada card payments for local customers"
    ],
    howToStart: [
      { step: 1, title: "Register Your Business", description: "Obtain CR from Ministry of Commerce and register for VAT if applicable" },
      { step: 2, title: "Choose Platform", description: "Select Shopify, Salla, or Zid for your online store" },
      { step: 3, title: "Setup Payments", description: "Integrate local payment gateways supporting mada cards" },
      { step: 4, title: "Find Suppliers", description: "Source from local wholesalers or international dropshippers" },
      { step: 5, title: "Launch Marketing", description: "Focus on Instagram, Snapchat, and Twitter for Saudi audience" }
    ],
    marketSize: "$8.5 Billion",
    internetPenetration: "97%",
    averageOrderValue: "$85"
  },
  uae: {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    introduction: "The UAE is the most mature e-commerce market in the Middle East with diverse population and strong logistics infrastructure.",
    legalRequirements: [
      "Trade license from Department of Economic Development (DED)",
      "E-trader license for online-only businesses (Dubai)",
      "VAT registration for businesses exceeding AED 375,000",
      "Data protection compliance under UAE Data Protection Law"
    ],
    paymentGateways: [
      { name: "Network International", description: "Leading UAE processor with extensive features", fees: "2.9% + AED 1" },
      { name: "PayFort (Amazon)", description: "Amazon's payment service for MENA", fees: "2.8% + AED 1.5" },
      { name: "Checkout.com", description: "Global gateway with local expertise", fees: "2.95% per transaction" },
      { name: "Telr", description: "Popular for SMEs with easy integration", fees: "3% + AED 1" }
    ],
    popularNiches: [
      { niche: "Luxury Fashion", reason: "High expat income and luxury shopping culture" },
      { niche: "Electronics & Gadgets", reason: "Tech hub status and early adopter market" },
      { niche: "Organic & Health Foods", reason: "Health-conscious expat community" },
      { niche: "Baby & Kids Products", reason: "Large expat family population" }
    ],
    challenges: [
      "Highly competitive market with international players",
      "Diverse customer base requiring multi-language support",
      "High customer acquisition costs",
      "Free shipping expectations"
    ],
    tips: [
      "Target specific expat communities with tailored marketing",
      "Offer same-day delivery in Dubai/Abu Dhabi",
      "Use influencer marketing on Instagram",
      "Provide multiple currency options"
    ],
    howToStart: [
      { step: 1, title: "Get Trade License", description: "Apply for e-commerce license from relevant free zone or DED" },
      { step: 2, title: "Open Bank Account", description: "Business bank account required for payment gateway integration" },
      { step: 3, title: "Build Store", description: "Create multilingual store supporting English and Arabic" },
      { step: 4, title: "Setup Logistics", description: "Partner with Aramex, Fetchr, or other local couriers" },
      { step: 5, title: "Launch Campaigns", description: "Focus on Google Ads, Instagram, and Facebook for UAE market" }
    ],
    marketSize: "$7.2 Billion",
    internetPenetration: "99%",
    averageOrderValue: "$110"
  },
  pakistan: {
    country: "Pakistan",
    flag: "🇵🇰",
    introduction: "Pakistan's e-commerce sector is rapidly growing with increasing internet penetration and a young, tech-savvy population.",
    legalRequirements: [
      "NTN (National Tax Number) from FBR",
      "Sales Tax Registration for online businesses",
      "Business bank account for payment processing",
      "PSEB registration for IT/e-commerce benefits"
    ],
    paymentGateways: [
      { name: "JazzCash", description: "Leading mobile wallet with wide reach", fees: "2.5% per transaction" },
      { name: "Easypaisa", description: "Popular digital payment solution", fees: "2.3% + PKR 1" },
      { name: "PayFast", description: "Local gateway with multiple options", fees: "3% per transaction" },
      { name: "2Checkout", description: "International payments support", fees: "3.5% + $0.35" }
    ],
    popularNiches: [
      { niche: "Fashion & Clothing", reason: "Young population with interest in trendy apparel" },
      { niche: "Mobile Accessories", reason: "High smartphone usage and accessories demand" },
      { niche: "Beauty & Cosmetics", reason: "Growing beauty consciousness and social media influence" },
      { niche: "Home Appliances", reason: "Urbanization driving home improvement needs" }
    ],
    challenges: [
      "75% customers prefer cash on delivery",
      "Limited credit card penetration (2-3%)",
      "Trust issues with online payments",
      "Logistics challenges in remote areas"
    ],
    tips: [
      "Build trust with detailed product videos and reviews",
      "Partner with TCS, Leopards, or M&P for COD services",
      "Use WhatsApp Business for customer support",
      "Focus on mobile-optimized experience"
    ],
    howToStart: [
      { step: 1, title: "Register Business", description: "Get NTN and register with FBR for tax compliance" },
      { step: 2, title: "Choose Platform", description: "Use Shopify, WooCommerce, or local platforms like Markaz" },
      { step: 3, title: "Setup COD", description: "Partner with courier services offering cash collection" },
      { step: 4, title: "Source Products", description: "Import from China via Alibaba or source locally" },
      { step: 5, title: "Market Locally", description: "Use Facebook, Instagram, and WhatsApp for marketing" }
    ],
    marketSize: "$4.2 Billion",
    internetPenetration: "36%",
    averageOrderValue: "$25"
  }
};