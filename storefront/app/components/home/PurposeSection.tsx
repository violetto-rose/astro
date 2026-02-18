import type { ComponentType } from 'react';
import { purposeItems } from './data';

type PurposeItem = {
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export function PurposeSection({
  items = purposeItems,
}: {
  items?: PurposeItem[];
}) {
  return (
    <section className="bg-primary-100/70 border-y border-primary-200 py-12 mt-6">
      <div className="max-w-[1060px] mx-auto px-6">
        <h2 className="text-brand text-4xl leading-none text-center font-semibold mb-7">
          Shop By Purpose
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {items.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="bg-white border border-primary-200 rounded-xl px-3 py-4 text-center text-brand"
            >
              <div className="h-10 w-10 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-2 text-[18px] leading-none">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
