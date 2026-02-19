import type { ProductLike } from './types';
import { HomeProductCard } from './HomeProductCard';
import { Divider } from './Divider';
import { SectionHeader } from './SectionHeader';

export function ProductRowSection({
  products,
  showDivider = true,
  title,
}: {
  products: ProductLike[];
  showDivider?: boolean;
  title?: string;
}) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-6">
      <SectionHeader title={title || "New Sacred Arrivals"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {products.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
      </div>
      {showDivider ? <Divider /> : null}
    </section>
  );
}
