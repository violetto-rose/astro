import {
  BoltIcon,
  HeartIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import type { CollectionItem, ProductLike } from './types';

export const purposeItems = [
  { label: 'Wealth', icon: SparklesIcon },
  { label: 'Health', icon: HeartIcon },
  { label: 'Love', icon: HeartIcon },
  { label: 'Luck', icon: SparklesIcon },
  { label: 'Protection', icon: ShieldCheckIcon },
  { label: 'Peace', icon: BoltIcon },
  { label: 'Courage', icon: BoltIcon },
  { label: 'Balance', icon: ScaleIcon },
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
