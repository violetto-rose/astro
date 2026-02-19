import { Link } from '@remix-run/react';
import { SectionHeader } from '~/components/home/SectionHeader';
import type { CollectionItem } from './types';

export function CollectionsSection({
  collections,
  title,
}: {
  collections: CollectionItem[];
  title?: string;
}) {
  if (!collections.length) {
    return null;
  }

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-8">
      <SectionHeader title={title || "Shop Our Collections"} />
      <div className="flex gap-8 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.slug}`}
            prefetch="intent"
            className="text-center shrink-0 snap-start w-[160px] sm:w-[170px]"
          >
            <div className="h-[170px] w-[170px] max-w-full mx-auto rounded-full overflow-hidden border-2 border-secondary-300">
              {collection.featuredAsset?.preview ? (
                <img
                  src={`${collection.featuredAsset?.preview}?w=400&h=400`}
                  alt={collection.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-secondary-100" />
              )}
            </div>
            <p className="mt-3 text-[20px] leading-tight font-medium text-temple-brown">
              {collection.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
