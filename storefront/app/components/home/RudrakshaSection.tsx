import type { CollectionItem, ProductLike } from './types';
import { HomeProductCard } from './HomeProductCard';
import { SectionHeader } from './SectionHeader';
import { Divider } from './Divider';

export function RudrakshaSection({
  heroCollection,
  products,
  title,
  subtitle
}: {
  heroCollection?: CollectionItem;
  products: ProductLike[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-8">
      <SectionHeader title={title || "Single Rudraksha Beads"} viewAll />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:grid-rows-2">
        <div className="bg-white border border-secondary-200 rounded-xl overflow-hidden flex flex-col lg:row-span-2">
          {heroCollection?.featuredAsset?.preview ? (
            <img
              src={`${heroCollection.featuredAsset.preview}?w=860&h=950`}
              alt="Original Nepali Rudraksha"
              className="h-[500px] lg:h-full w-full object-cover"
            />
          ) : null}
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white p-5 lg:p-6">
            <h3 className="text-2xl lg:text-3xl leading-none font-semibold">
              {title || "Original Nepali Rudraksha"}
            </h3>
            <p className="mt-2 text-lg lg:text-xl leading-tight">
              {subtitle || "1 Mukhi to 11 Mukhi - with certificate"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2 lg:row-span-2">
          {products.map((product) => (
            <HomeProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
}
