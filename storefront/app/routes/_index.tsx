import { useLoaderData } from '@remix-run/react';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { getCollections } from '~/providers/collections/collections';
import { toProduct } from '~/components/home/data';
import { HeroSection } from '~/components/home/HeroSection';
import { FavouritesSection } from '~/components/home/FavouritesSection';
import { LabTestedSection } from '~/components/home/LabTestedSection';
import { ProductRowSection } from '~/components/home/ProductRowSection';
import { CollectionsSection } from '~/components/home/CollectionsSection';
import { TrendingSection } from '~/components/home/TrendingSection';
import { PurposeSection } from '~/components/home/PurposeSection';
import { EnergySection } from '~/components/home/EnergySection';
import { RudrakshaSection } from '~/components/home/RudrakshaSection';
import { SpiritualSection } from '~/components/home/SpiritualSection';

export async function loader({ request }: LoaderFunctionArgs) {
  const collections = await getCollections(request, { take: 20 });
  return json({ collections });
}


export default function Index() {
  const { collections } = useLoaderData<typeof loader>();
  const products = collections.map((item, index) => toProduct(item, index));

  const heroImage = collections[0]?.featuredAsset?.preview;
  const sharks = products.slice(0, 5);
  const rowTwo = products.slice(5, 10);
  const circles = collections.slice(0, 7);
  const trending = products.slice(10, 14);
  const energy = products.slice(2, 10);
  const rudraksha = products.slice(4, 8);
  const spiritual = products.slice(8, 12);
  const labTestedImage = collections[2]?.featuredAsset?.preview;
  const rudrakshaHero = collections[1];

  return (
    <div className="bg-transparent">
      <HeroSection heroImage={heroImage} />
      <FavouritesSection products={sharks} />
      <LabTestedSection image={labTestedImage} />
      <ProductRowSection products={rowTwo} />
      <CollectionsSection collections={circles} />
      <TrendingSection products={trending} />
      <PurposeSection />
      <EnergySection products={energy} />
      <RudrakshaSection heroCollection={rudrakshaHero} products={rudraksha} />
      <SpiritualSection products={spiritual} />
    </div>
  );
}
