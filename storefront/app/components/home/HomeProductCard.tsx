import { Link } from '@remix-run/react';
import { StarIcon } from '@heroicons/react/20/solid';
import type { ProductLike } from './types';

export function HomeProductCard({
  product,
  height = 'h-[250px]',
}: {
  product: ProductLike;
  height?: string;
}) {
  return (
    <Link
      to={`/collections/${product.slug}`}
      prefetch="intent"
      className="group flex h-full flex-col rounded-xl border border-secondary-200 bg-white overflow-hidden transition-colors hover:border-primary-200"
    >
      <div className="relative overflow-hidden bg-secondary-50/70">
        {product.image ? (
          <img
            src={`${product.image}?w=640&h=760`}
            alt={product.name}
            className={`${height} w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]`}
          />
        ) : (
          <div className={`${height} bg-secondary-100`} />
        )}

        <span className="absolute top-0 left-0 bg-primary-700 text-white text-[12px] px-3 py-1 font-semibold uppercase tracking-wide">
          {product.discountLabel}
        </span>

        {product.sharkFav ? (
          <span className="absolute top-0 right-0 bg-temple-brown text-secondary-50 text-[10px] px-2 py-1 font-bold uppercase tracking-wide">
            Sharks' Favourite
          </span>
        ) : null}

        {product.newArrival ? (
          <span className="absolute top-8 left-0 bg-secondary-50 text-secondary-700 text-[11px] px-3 py-1 font-medium uppercase tracking-wide border border-secondary-200">
            New arrival
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mt-4 px-4 text-[18px] leading-[1.35] font-semibold text-brand line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-2 px-4 flex items-center gap-2 text-sm leading-none">
          <span
            className="flex items-center gap-1"
            aria-label={`${product.rating} out of 5 stars`}
          >
            {[0, 1, 2, 3, 4].map((star) => (
              <StarIcon
                key={star}
                className={`h-3.5 w-3.5 ${
                  star < product.rating ? 'text-saffron' : 'text-secondary-200'
                }`}
              />
            ))}
          </span>
          <span className="text-secondary-700 text-xs font-medium">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-brand text-sm">({product.reviews})</span>
        </p>
        <p className="px-4 pb-4 pt-2 text-brand text-3xl leading-none font-bold">
          Rs {product.price}
          <span className="ml-2 text-secondary-600 text-sm line-through font-normal">
            Rs {product.oldPrice}
          </span>
        </p>
      </div>
    </Link>
  );
}
