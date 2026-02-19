import type { HeroSlide } from '~/components/home/types';

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    variant: "center",
    title: "RakshaLokham",
    subtitle: "Spiritual energy jewelry rooted in tradition",
    image: "", // Background or pattern if needed
    cta: "Explore Collection",
    link: "/search"
  },
  {
    id: 2,
    variant: "imageLeft",
    title: "Chat with Guruji",
    subtitle: "Receive personalized spiritual guidance and remedies directly through WhatsApp.",
    price: "₹500 / consultation",
    image: "/guruji-placeholder.svg",
    cta: "Chat on WhatsApp",
    link: "https://wa.me/919999999999?text=Hari%20Om%20Guruji"
  },
  {
    id: 3,
    variant: "imageLeft",
    title: "Rudraksha",
    subtitle: "Authentic beads for spiritual growth and protection.",
    image: "/assets/protection.svg",
    cta: "View Collection",
    link: "/search?q=rudraksha"
  },
  {
    id: 4,
    variant: "imageLeft",
    title: "Rashi Stone",
    subtitle: "Gemstones aligned with your astrological sign.",
    image: "/assets/aries.svg",
    cta: "Find Your Stone",
    link: "/collections/rashi-stone"
  },
  {
    id: 5,
    variant: "imageLeft",
    title: "Karungali",
    subtitle: "Powerful ebony wood for success and warding off negativity.",
    image: "/assets/courage.svg",
    cta: "Shop Karungali",
    link: "/collections/karungali"
  }
];

export const heroTickerText = [
  "Authentic Rudraksha",
  "Energised Rashi Stones",
  "Karungali Protection",
  "Guidance from Guruji"
];
