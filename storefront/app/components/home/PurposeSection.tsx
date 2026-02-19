import { purposeItems } from './data';

type PurposeItem = {
  label: string;
  iconSrc: string;
};

export function PurposeSection({
  items = purposeItems,
  title,
}: {
  items?: PurposeItem[];
  title?: string;
}) {
  const loopItems = [...items, ...items];

  return (
    <section className="bg-secondary-50 border-y border-secondary-200 py-12 mt-6">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-brand text-4xl leading-none text-center font-semibold mb-7">
          {title || "Shop By Purpose"}
        </h2>
        <div className="overflow-hidden">
          <div className="purpose-carousel-track flex w-max gap-4">
            {loopItems.map(({ label, iconSrc }, index) => (
              <div
                key={`${label}-${index}`}
                className="w-[140px] shrink-0 bg-white border border-secondary-200 rounded-xl px-3 py-4 text-center text-brand"
              >
                <div className="h-10 w-10 mx-auto rounded-full bg-primary-50 border border-secondary-200 flex items-center justify-center text-primary-700">
                  <span
                    role="img"
                    aria-label={`${label} symbol`}
                    className="h-6 w-6 inline-block bg-current"
                    style={{
                      WebkitMaskImage: `url(${iconSrc})`,
                      maskImage: `url(${iconSrc})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                </div>
                <p className="mt-2 text-[18px] leading-none">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
