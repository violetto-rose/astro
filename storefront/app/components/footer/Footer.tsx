import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';

const policyLinks = [
  { label: 'Refund and Cancellations', href: '#' },
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Shipping Policy', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8v3h2.1v8h3.4Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 stroke-current"
        fill="none"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M21.1 8.2a2.8 2.8 0 0 0-2-2c-1.8-.5-7.1-.5-7.1-.5s-5.3 0-7.1.5a2.8 2.8 0 0 0-2 2A29.8 29.8 0 0 0 2.4 12c0 1.3.2 2.6.5 3.8a2.8 2.8 0 0 0 2 2c1.8.5 7.1.5 7.1.5s5.3 0 7.1-.5a2.8 2.8 0 0 0 2-2c.3-1.2.5-2.5.5-3.8 0-1.3-.2-2.6-.5-3.8ZM10.3 15.3V8.7L15.8 12l-5.5 3.3Z" />
      </svg>
    ),
  },
];

export default function Footer({
  collections,
}: {
  collections: RootLoaderData['collections'];
}) {
  const quickLinks = (collections ?? []).slice(0, 8);

  return (
    <footer
      className="mt-16 border-t border-secondary-500/30 bg-temple-brown-dark text-secondary-100"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="/logo.svg" alt="Rakshalokam Logo" className="h-10 w-auto" />
            <p className="mt-5 max-w-xs text-base leading-relaxed text-secondary-100/90 font-sans">
              Discover authentic spiritual products rooted in timeless Hindu traditions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-display text-saffron-light tracking-[0.16em] uppercase mb-6">
              Quick Links
            </h3>
            <ul role="list" className="space-y-3">
              {quickLinks.map((collection) => (
                <li key={collection.id}>
                  <Link
                    to={`/collections/${collection.slug}`}
                    prefetch="intent"
                    className="text-base text-secondary-100/90 hover:text-saffron-light transition-colors font-serif"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-display text-saffron-light tracking-[0.16em] uppercase mb-6">
              Policies
            </h3>
            <ul role="list" className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-secondary-100/90 hover:text-saffron-light transition-colors font-serif"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-display text-saffron-light tracking-[0.16em] uppercase mb-6">
              Follow Us
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="h-11 w-11 rounded-full border border-secondary-300/70 text-secondary-100 flex items-center justify-center transition-colors hover:bg-saffron hover:text-temple-brown-dark"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-500/30 py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-secondary-100/80 font-sans">
        &copy; 2026, Rakshalokam. All rights reserved.
      </div>
    </footer>
  );
}
