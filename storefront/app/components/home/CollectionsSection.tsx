import { Link } from '@remix-run/react';
import type { CollectionItem } from './types';
import { SectionHeader } from './SectionHeader';

export function CollectionsSection({
  collections,
}: {
  collections: CollectionItem[];
}) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-8">
      <SectionHeader title="Shop Our Collections" />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.slug}`}
            prefetch="intent"
            className="text-center"
          >
            <div className="h-[170px] w-[170px] max-w-full mx-auto rounded-full overflow-hidden ring-1 ring-primary-200">
              {collection.featuredAsset?.preview ? (
                <img
                  src={`${collection.featuredAsset?.preview}?w=400&h=400`}
                  alt={collection.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-primary-100" />
              )}
            </div>
            <p className="mt-3 text-[20px] leading-tight font-medium text-brand">
              {collection.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
