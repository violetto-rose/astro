import type { ProductLike } from './types';
import { HomeProductCard } from './HomeProductCard';
import { SectionHeader } from './SectionHeader';

export function EnergySection({ products }: { products: ProductLike[] }) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-10">
      <SectionHeader title="Explore Energy Stones" viewAll />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {products.slice(0, 5).map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(5, 8).map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
