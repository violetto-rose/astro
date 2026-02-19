import { useLoaderData } from '@remix-run/react';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { getCollections } from '~/providers/collections/collections';
import { toProduct } from '~/components/home/data';
import { HeroCarousel } from '~/components/home/HeroCarousel';
import { FavouritesSection } from '~/components/home/FavouritesSection';
import { LabTestedSection } from '~/components/home/LabTestedSection';
import { ProductRowSection } from '~/components/home/ProductRowSection';
import { CollectionsSection } from '~/components/home/CollectionsSection';
import { TrendingSection } from '~/components/home/TrendingSection';
import { PurposeSection } from '~/components/home/PurposeSection';
import { EnergySection } from '~/components/home/EnergySection';
import { RudrakshaSection } from '~/components/home/RudrakshaSection';
import { SpiritualSection } from '~/components/home/SpiritualSection';
import { homeSections } from '~/data/homeSections';
import { RashiSection } from '~/components/home/RashiSection';
import { SortOrder } from '~/generated/graphql';

export async function loader({ request }: LoaderFunctionArgs) {
  const [collectionsResult, liveCollectionsResult] = await Promise.allSettled([
    getCollections(request, { take: 20 }),
    getCollections(request, {
      take: 24,
      topLevelOnly: true,
      sort: { position: SortOrder.Asc },
    }),
  ]);

  const collections =
    collectionsResult.status === 'fulfilled'
      ? collectionsResult.value ?? []
      : [];
  const liveCollections =
    liveCollectionsResult.status === 'fulfilled'
      ? liveCollectionsResult.value ?? []
      : collections.slice(0, 12);

  return json({ collections, liveCollections });
}

export default function Index() {
  const { collections, liveCollections } = useLoaderData<typeof loader>();
  const products = collections.map((item, index) => toProduct(item, index));

  const pickProducts = (start: number, count: number) => {
    if (!products.length) {
      return [];
    }

    if (products.length <= start) {
      return products.slice(0, count);
    }

    const segment = products.slice(start, start + count);
    if (segment.length >= count) {
      return segment;
    }

    return [...segment, ...products.slice(0, count - segment.length)];
  };

  const heroImage = collections[0]?.featuredAsset?.preview;
  const sharks = pickProducts(0, 5);
  const rowTwo = pickProducts(5, 5);
  const trending = pickProducts(10, 4);
  const energy = pickProducts(2, 8);
  const rudraksha = pickProducts(4, 4);
  const spiritual = pickProducts(8, 4);
  const labTestedImage = collections[2]?.featuredAsset?.preview;
  const rudrakshaHero = collections[1];

  return (
    <div className="bg-transparent">
      <HeroCarousel />
      <TrendingSection products={trending} {...homeSections.trending} />
      <FavouritesSection products={sharks} {...homeSections.favourites} />
      <CollectionsSection
        collections={liveCollections}
        {...homeSections.collections}
      />
      <LabTestedSection image={labTestedImage} {...homeSections.labTested} />
      <ProductRowSection products={rowTwo} {...homeSections.productRow} />
      <EnergySection products={energy} {...homeSections.energy} />
      <RashiSection />
      <RudrakshaSection
        heroCollection={rudrakshaHero}
        products={rudraksha}
        {...homeSections.rudraksha}
      />
      <PurposeSection {...homeSections.purpose} />
      <SpiritualSection products={spiritual} {...homeSections.spiritual} />
    </div>
  );
}
