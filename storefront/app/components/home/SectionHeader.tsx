import { Link } from '@remix-run/react';

export function SectionHeader({
  title,
  viewAll,
}: {
  title: string;
  viewAll?: boolean;
}) {
  return (
    <div className="flex items-center justify-between mb-5 gap-4">
      <h2 className="text-3xl sm:text-4xl leading-tight tracking-tight font-semibold text-brand">
        {title}
      </h2>
      {viewAll ? (
        <Link
          to="/search"
          className="text-base font-semibold text-secondary-700 hover:text-primary-700 transition-colors"
        >
          View all
        </Link>
      ) : null}
    </div>
  );
}
