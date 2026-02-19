import { heroTickerText } from '~/data/heroSlides';

export function HeroTicker() {
  // Duplicate the text to ensure seamless looping
  const duplicatedText = [...heroTickerText, ...heroTickerText, ...heroTickerText, ...heroTickerText];

  return (
    <div className="w-full bg-white border-t border-secondary-200/70 overflow-hidden relative z-20 h-7 flex items-center">
      <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
        {duplicatedText.map((text, index) => (
          <div key={`${text}-${index}`} className="flex items-center px-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-4" />
            <span className="text-xs uppercase tracking-[0.2em] font-serif font-medium text-temple-brown">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* Fade Effect on Edges (Optional but adds polish) */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      {/* Inline styles for the scroll animation if not in global css */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
