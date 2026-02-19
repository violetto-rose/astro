import type { ProductLike } from './types';
import { HomeProductCard } from './HomeProductCard';
import { SectionHeader } from './SectionHeader';

export function SpiritualSection({ products, title }: { products: ProductLike[], title?: string }) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 pt-8 pb-16">
      <SectionHeader title={title || "Spiritual Jewellery"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
