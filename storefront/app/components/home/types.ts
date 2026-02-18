import type { CollectionsQuery } from '~/generated/graphql';

export type CollectionItem = CollectionsQuery['collections']['items'][number];

export type ProductLike = {
  id: string;
  name: string;
  slug: string;
  image?: string;
  discountLabel: string;
  sharkFav: boolean;
  newArrival: boolean;
  rating: number;
  reviews: number;
  price: number;
  oldPrice: number;
};
