import type { CollectionItem, ProductLike } from './types';

export const purposeItems = [
  { label: 'Wealth', iconSrc: '/assets/wealth.svg' },
  { label: 'Health', iconSrc: '/assets/health.svg' },
  { label: 'Love', iconSrc: '/assets/love.svg' },
  { label: 'Luck', iconSrc: '/assets/luck.svg' },
  { label: 'Protection', iconSrc: '/assets/protection.svg' },
  { label: 'Peace', iconSrc: '/assets/peace.svg' },
  { label: 'Courage', iconSrc: '/assets/courage.svg' },
  { label: 'Balance', iconSrc: '/assets/balance.svg' },
];

export const rashiItems = [
  { label: 'Aries', iconSrc: '/assets/aries.svg' },
  { label: 'Taurus', iconSrc: '/assets/taurus.svg' },
  { label: 'Gemini', iconSrc: '/assets/gemini.svg' },
  { label: 'Cancer', iconSrc: '/assets/cancer.svg' },
  { label: 'Leo', iconSrc: '/assets/leo.svg' },
  { label: 'Virgo', iconSrc: '/assets/virgo.svg' },
  { label: 'Libra', iconSrc: '/assets/libra.svg' },
  { label: 'Scorpio', iconSrc: '/assets/scorpio.svg' },
  { label: 'Sagittarius', iconSrc: '/assets/sagittarius.svg' },
  { label: 'Capricorn', iconSrc: '/assets/capricorn.svg' },
  { label: 'Aquarius', iconSrc: '/assets/aquarius.svg' },
  { label: 'Pisces', iconSrc: '/assets/pisces.svg' },
];

export function toProduct(
  collection: CollectionItem,
  index: number,
): ProductLike {
  const price = 499 + (index % 5) * 100;
  const discount = 25 + (index % 7) * 5;
  const oldPrice = Math.round((price * 100) / (100 - discount));

  return {
    id: collection.id,
    name: collection.name,
    slug: collection.slug,
    image: collection.featuredAsset?.preview,
    discountLabel: index % 4 === 0 ? 'Up to 40% off' : `${discount}% off`,
    sharkFav: index % 3 === 0,
    newArrival: index % 5 === 0,
    rating: 4 + (index % 2),
    reviews: 32 + index * 21,
    price,
    oldPrice,
  };
}
