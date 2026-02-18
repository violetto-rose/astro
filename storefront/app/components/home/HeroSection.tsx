import { Link } from '@remix-run/react';

export function HeroSection({ heroImage }: { heroImage?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-white border-b border-primary-100">
      {heroImage ? (
        <img
          src={`${heroImage}?w=1900&h=900`}
          alt="Rakshalokam Hero"
          className="absolute right-0 top-0 h-full w-[58%] object-cover opacity-20 mix-blend-multiply"
        />
      ) : null}
      <div className="absolute inset-0 bg-hero-spotlight" />

      <div className="relative max-w-[1280px] mx-auto px-6 min-h-[420px] lg:min-h-[500px] py-12 lg:py-16 flex items-end">
        <div className="w-full grid lg:grid-cols-[360px_1fr] gap-10 items-end">
          <div className="bg-white border border-primary-200 rounded-2xl p-7 text-brand max-w-[360px]">
            <p className="text-primary-700 font-semibold uppercase tracking-wide text-sm">
              Special Discount Offer
            </p>
            <p className="mt-3 text-5xl leading-none font-extrabold">
              15% OFF
            </p>
            <div className="mt-5 inline-flex rounded-lg px-4 py-2 bg-primary-600 text-white font-semibold text-lg">
              Use code - TRILOK15
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              Limited period offer on selected collections.
            </p>
          </div>

          <div className="text-left lg:text-center text-brand pb-1 lg:pb-8">
            <p className="text-sm uppercase tracking-[0.18em] text-primary-700 font-semibold">
              Timeless Energy Pieces
            </p>
            <h1 className="mt-4 text-5xl md:text-7xl tracking-wide">
              RAKSHALOKAM
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-zinc-700 max-w-2xl mx-auto">
              Clean, intentional pieces designed with traditional meaning and
              modern form.
            </p>
            <Link
              to="/search"
              className="mt-6 inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Explore all products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
