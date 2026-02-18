import type { ProductLike } from './types';
import { HomeProductCard } from './HomeProductCard';
import { SectionHeader } from './SectionHeader';

export function TrendingSection({ products }: { products: ProductLike[] }) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-8">
      <SectionHeader title="Latest & Trending" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
