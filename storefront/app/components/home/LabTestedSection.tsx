export function LabTestedSection({ image, title, subtitle }: { image?: string, title?: string, subtitle?: string }) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 pb-10">
      <div className="bg-secondary-50/70 border border-secondary-200 rounded-2xl p-8 md:p-10">
        <h2 className="text-3xl sm:text-4xl leading-tight font-semibold text-brand">
          {title || "Asli Wearables - Lab Tested"}
        </h2>
        <p className="mt-4 text-temple-brown text-lg sm:text-2xl leading-[1.4] max-w-4xl">
          {subtitle || "We follow our proprietary BTR system to ensure you always get original and genuine beads and stones."}
        </p>
        {image ? (
          <img
            src={`${image}?w=1400&h=560`}
            alt="Lab tested collection"
            className="mt-7 h-[300px] md:h-[360px] w-full object-cover rounded-xl"
          />
        ) : null}
      </div>
    </section>
  );
}
