export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "cosmetics",
    name: "Cosmetics",
    description: "Premium herbal cosmetics and personal care products",
    icon: "sparkles",
  },
  {
    id: "syrups",
    name: "Syrups",
    description: "Ayurvedic health syrups and liquid formulations",
    icon: "droplet",
  },
  {
    id: "herbs",
    name: "Herbs",
    description: "Premium quality dried herbs and botanicals",
    icon: "leaf",
  },
  {
    id: "oils",
    name: "Oils",
    description: "Traditional Ayurvedic oils for therapeutic use",
    icon: "droplet",
  },
  {
    id: "powders",
    name: "Powders",
    description: "Finely ground herbal powders and churnas",
    icon: "sparkles",
  },
  {
    id: "capsules",
    name: "Capsules",
    description: "Standardized herbal extracts in capsule form",
    icon: "pill",
  },
  {
    id: "formulations",
    name: "Formulations",
    description: "Classical Ayurvedic compound formulations",
    icon: "flask",
  },
];

export const products: Product[] = [
  {
    id: "charcoal-herbal-soap",
    name: "Charcoal Herbal Soap",
    category: "cosmetics",
    shortDescription: "Handmade premium charcoal soap for deep cleansing and detoxification",
    description: "Our premium Charcoal Herbal Soap is handcrafted using activated charcoal and natural herbs. This luxurious soap provides deep cleansing, removes impurities, and detoxifies the skin naturally. Perfect for all skin types, especially oily and acne-prone skin.",
    ingredients: ["Activated Charcoal", "Natural Herbs", "Coconut Oil", "Palm Oil", "Glycerin"],
    benefits: [
      "Deep cleansing and detoxification",
      "Removes excess oil and impurities",
      "Natural antibacterial properties",
      "Suitable for all skin types",
      "Handmade with premium ingredients",
    ],
    usage: "Wet the soap and create a rich lather. Gently massage onto wet skin and rinse thoroughly with water. Use daily for best results.",
    image: "/images/4ca8eb_6f91b78b57fb48d2b68edcee16f86331~mv2 (1).jpeg",
  },
  {
    id: "almond-body-butter",
    name: "Almond Body Butter",
    category: "cosmetics",
    shortDescription: "Nourishing almond body butter for soft and supple skin",
    description: "Luxurious Almond Body Butter enriched with pure almond oil and natural moisturizers. This rich, creamy formula deeply moisturizes the skin, provides long-lasting hydration, and leaves skin feeling soft, smooth, and beautifully fragrant.",
    ingredients: ["Sweet Almond Oil", "Shea Butter", "Cocoa Butter", "Vitamin E", "Natural Fragrance"],
    benefits: [
      "Makes skin soft and supple",
      "Deeply moisturizes the skin",
      "Provides long-lasting hydration",
      "Improves skin texture",
      "Natural nourishment",
    ],
    usage: "Apply generously to clean, dry skin. Massage gently until fully absorbed. Use daily for best results, especially after bathing.",
    image: "/images/4ca8eb_7742537b9a7b42a1a2d457c77dba2c31~mv2 (1).png",
  },
  {
    id: "immunity-booster-syrup",
    name: "Immunity Booster Syrup",
    category: "syrups",
    shortDescription: "Ayurvedic immunity booster syrup for energy, immunity and performance",
    description: "Our Immunity Booster Syrup is a powerful Ayurvedic formulation designed to enhance your body's natural defense system. This comprehensive health tonic boosts energy levels, strengthens immunity, and improves overall performance naturally.",
    ingredients: ["Amla", "Giloy", "Tulsi", "Ashwagandha", "Honey", "Natural Herbs"],
    benefits: [
      "Helpful in treating energy deficiency",
      "Boosts natural immunity",
      "Enhances physical performance",
      "Supports overall health",
      "Natural Ayurvedic formulation",
    ],
    usage: "Take 10-15ml twice daily with water or as directed by healthcare practitioner. Best taken on empty stomach for optimal absorption.",
    image: "/images/4ca8eb_8d8658451a794285a2c7adeb2a24d914~mv2 (1).jpeg",
  },
  {
    id: "ashwagandha-powder",
    name: "Ashwagandha Powder",
    category: "powders",
    shortDescription: "Premium organic Ashwagandha root powder for vitality and stress relief",
    description: "Our Ashwagandha powder is sourced from organically grown Withania somnifera roots, carefully processed to preserve maximum potency. This adaptogenic herb has been used for over 3,000 years in Ayurvedic medicine to rejuvenate and restore the body.",
    ingredients: ["100% Organic Ashwagandha Root (Withania somnifera)"],
    benefits: [
      "Supports healthy stress response",
      "Promotes restful sleep",
      "Enhances physical endurance",
      "Supports cognitive function",
      "Balances Vata and Kapha doshas",
    ],
    usage: "Mix 1/2 to 1 teaspoon with warm milk or water, once or twice daily, or as directed by healthcare practitioner.",
    image: "/images/ashwagandha.jpg",
  },
  {
    id: "triphala-capsules",
    name: "Triphala Capsules",
    category: "capsules",
    shortDescription: "Balanced digestive support with three fruits formula",
    description: "Triphala is a time-tested Ayurvedic formulation combining three powerful fruits: Amalaki, Bibhitaki, and Haritaki. Our capsules deliver standardized extracts for consistent digestive and detoxification support.",
    ingredients: ["Amalaki (Emblica officinalis)", "Bibhitaki (Terminalia bellirica)", "Haritaki (Terminalia chebula)"],
    benefits: [
      "Supports healthy digestion",
      "Gentle detoxification",
      "Antioxidant properties",
      "Balances all three doshas",
      "Supports eye health",
    ],
    usage: "Take 2 capsules twice daily with water, preferably before meals or at bedtime.",
    image: "/images/triphala.jpg",
  },
  {
    id: "brahmi-oil",
    name: "Brahmi Hair Oil",
    category: "oils",
    shortDescription: "Nourishing scalp and hair oil with Brahmi and coconut base",
    description: "This traditional Brahmi oil is crafted using authentic Ayurvedic methods, infusing Brahmi (Bacopa monnieri) into pure coconut oil. Perfect for scalp massage and hair nourishment.",
    ingredients: ["Coconut Oil", "Brahmi (Bacopa monnieri)", "Amla", "Bhringraj"],
    benefits: [
      "Nourishes scalp and hair",
      "Supports healthy hair growth",
      "Cooling and calming effect",
      "Promotes mental clarity",
      "Traditional stress relief",
    ],
    usage: "Warm slightly and massage into scalp. Leave for 30 minutes or overnight before washing. Use 2-3 times per week.",
    image: "/images/brahmi-oil.jpg",
  },
  {
    id: "tulsi-dried",
    name: "Organic Tulsi Leaves",
    category: "herbs",
    shortDescription: "Holy Basil leaves for respiratory and immune support",
    description: "Sacred Tulsi (Holy Basil) leaves, carefully harvested and dried to preserve essential oils and therapeutic compounds. Known as the 'Queen of Herbs' in Ayurveda.",
    ingredients: ["100% Organic Tulsi Leaves (Ocimum sanctum)"],
    benefits: [
      "Supports respiratory health",
      "Immune system support",
      "Adaptogenic properties",
      "Promotes clear breathing",
      "Antioxidant rich",
    ],
    usage: "Steep 1 teaspoon in hot water for 5-10 minutes for tea. Can also be used in cooking or as directed.",
    image: "/images/tulsi.jpg",
  },
  {
    id: "chyawanprash",
    name: "Chyawanprash",
    category: "formulations",
    shortDescription: "Ancient rejuvenating jam with 40+ herbs",
    description: "Our Chyawanprash follows the classical Ayurvedic recipe, combining over 40 herbs with Amla as the base. This time-honored Rasayana (rejuvenative) supports overall vitality and immune function.",
    ingredients: ["Amla", "Ghee", "Honey", "Pippali", "Cardamom", "Cinnamon", "and 35+ traditional herbs"],
    benefits: [
      "Powerful immune support",
      "Rich in Vitamin C",
      "Supports respiratory health",
      "Enhances vitality and energy",
      "Traditional rejuvenative formula",
    ],
    usage: "Take 1-2 teaspoons daily, morning and evening, with warm milk or water.",
    image: "/images/chyawanprash.jpg",
  },
  {
    id: "neem-powder",
    name: "Neem Leaf Powder",
    category: "powders",
    shortDescription: "Blood purifying and skin supporting herbal powder",
    description: "Pure Neem leaf powder from sustainably sourced Azadirachta indica trees. Known for its powerful purifying and skin-supporting properties in traditional Ayurvedic practice.",
    ingredients: ["100% Organic Neem Leaves (Azadirachta indica)"],
    benefits: [
      "Supports healthy skin",
      "Blood purification",
      "Natural antimicrobial",
      "Supports oral health",
      "Balances Pitta and Kapha",
    ],
    usage: "Mix 1/4 to 1/2 teaspoon with water or honey. Can also be used topically as a paste.",
    image: "/images/neem.jpg",
  },
  {
    id: "sesame-oil",
    name: "Organic Sesame Oil",
    category: "oils",
    shortDescription: "Cold-pressed sesame oil for Abhyanga massage",
    description: "Premium cold-pressed sesame oil, the traditional base oil for Ayurvedic body massage (Abhyanga). Rich in antioxidants and deeply nourishing for all skin types.",
    ingredients: ["100% Cold-pressed Organic Sesame Oil"],
    benefits: [
      "Deep tissue nourishment",
      "Supports joint flexibility",
      "Warming and grounding",
      "Balances Vata dosha",
      "Traditional massage oil",
    ],
    usage: "Warm before use. Apply generously for full body massage. Allow to absorb for 15-20 minutes before bathing.",
    image: "/images/sesame-oil.jpg",
  },
  {
    id: "shatavari-capsules",
    name: "Shatavari Capsules",
    category: "capsules",
    shortDescription: "Women's health support with Asparagus racemosus",
    description: "Shatavari, meaning 'she who possesses a hundred husbands,' is the premier Ayurvedic herb for women's health. Our capsules contain standardized root extract for optimal benefits.",
    ingredients: ["Shatavari Root Extract (Asparagus racemosus)"],
    benefits: [
      "Supports female reproductive health",
      "Hormonal balance support",
      "Nourishing and rejuvenating",
      "Supports lactation",
      "Balances Pitta and Vata",
    ],
    usage: "Take 1-2 capsules twice daily with water or milk, or as directed by healthcare practitioner.",
    image: "/images/shatavari.jpg",
  },
  {
    id: "ashwagandha-powder-2",
    name: "Ashwagandha Powder",
    category: "powders",
    shortDescription: "Premium organic Ashwagandha root powder for vitality and stress relief",
    description: "Our Ashwagandha powder is sourced from organically grown Withania somnifera roots, carefully processed to preserve maximum potency. This adaptogenic herb has been used for over 3,000 years in Ayurvedic medicine to rejuvenate and restore the body.",
    ingredients: ["100% Organic Ashwagandha Root (Withania somnifera)"],
    benefits: [
      "Supports healthy stress response",
      "Promotes restful sleep",
      "Enhances physical endurance",
      "Supports cognitive function",
      "Balances Vata and Kapha doshas",
    ],
    usage: "Mix 1/2 to 1 teaspoon with warm milk or water, once or twice daily, or as directed by healthcare practitioner.",
    image: "/images/ashwagandha.jpg",
  },
];

export const certifications = [
  { name: "GMP Certified", description: "Good Manufacturing Practice" },
  { name: "ISO 22000", description: "Food Safety Management" },
  { name: "USDA Organic", description: "Certified Organic Products" },
  { name: "FSSAI", description: "Food Safety Standards Authority of India" },

  { name: "Kosher", description: "Kosher Certification" },
];

export const whyChooseUs = [
  {
    title: "Premium Quality",
    description: "Sourced from trusted farms and processed in state-of-the-art facilities with strict quality control.",
    icon: "shield-check",
  },
  {
    title: "Global Certifications",
    description: "GMP, ISO, USDA Organic, and multiple international certifications ensure compliance worldwide.",
    icon: "award",
  },
  {
    title: "Sustainable Practices",
    description: "Committed to ethical sourcing, fair trade, and environmentally responsible manufacturing.",
    icon: "leaf",
  },
  {
    title: "Global Export",
    description: "Serving partners in 50+ countries with reliable logistics and documentation support.",
    icon: "globe",
  },
];
