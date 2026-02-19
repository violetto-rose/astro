import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { heroSlides } from '~/data/heroSlides';
import { HeroTicker } from './HeroTicker';

const SLIDE_DURATION = 7000;

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer on manual change

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50 border-b border-secondary-200 min-h-[420px] lg:min-h-[500px]">
      {/* Background Mandalas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Mandala - 1/4 visible */}
        <img
          src="/mandala.png"
          alt=""
          className="absolute -top-80 -right-80 w-[600px] max-w-none h-[600px] opacity-100 animate-[spin_50s_linear_infinite] motion-reduce:animate-none"
        />
        {/* Bottom Left Mandala - 1/4 visible */}
        <img
          src="/mandala.png"
          alt=""
          className="absolute -bottom-80 -left-80 w-[600px] max-w-none h-[600px] opacity-100 animate-[spin_50s_linear_infinite] motion-reduce:animate-none"
        />
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-hero-spotlight pointer-events-none" />

      {/* Slides Container */}
      <div className="relative z-10 w-full h-full min-h-[420px] lg:min-h-[500px] flex items-center justify-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 h-full flex items-center justify-center">

          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transition-opacity duration-1000 ease-in-out w-full h-full flex items-center justify-center ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {slide.variant === 'center' ? (
                // Slide 1 - Brand Identity (Center)
                <div className="w-full flex flex-col items-center text-center">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary-700 font-serif font-semibold mb-4">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-5xl tracking-tighter text-brand md:text-7xl tracking-wide font-semibold font-display text-brand mb-6">
                    {slide.title}
                  </h1>
                  <Link
                    to={slide.link || '/search'}
                    className="inline-flex items-center px-8 py-3 rounded-full bg-primary-600 text-white font-serif font-semibold hover:bg-primary-700 transition-colors shadow-hero-pack uppercase tracking-wider text-sm"
                  >
                    {slide.cta}
                  </Link>
                </div>
              ) : (
                // Slides 2-5 - Image Left, Text Right
                <div className="w-full max-w-6xl mx-auto px-6 h-full flex items-center">
                  <div className="grid md:grid-cols-2 w-full items-center gap-12">

                    {/* Left Column: Image */}
                    <div className="relative h-[400px] md:h-[500px] flex items-end justify-center order-1">
                       <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-[100%] md:h-[110%] w-auto object-contain drop-shadow-2xl relative z-10 transform translate-y-8 md:translate-y-12 transition-transform duration-700 hover:scale-105"
                       />
                    </div>

                    {/* Right Column: Text & Aura */}
                    <div className="relative text-left flex flex-col justify-center order-2">
                       {/* Show Aura/Mandala only for specific slides if needed, or all imageLeft slides */}
                       {/* Preserving Mandala from Slide 2 for all imageLeft slides as requested to map structure */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none -z-10">
                        <div className="absolute inset-0 bg-saffron-light/20 rounded-full blur-[100px]" />
                        <img
                          src="/mandala.png"
                          alt=""
                          className="absolute inset-0 w-full h-full object-contain opacity-20 animate-[spin_60s_linear_infinite]"
                        />
                      </div>

                      <h2 className="text-4xl md:text-5xl font-display text-brand mb-4 drop-shadow-sm leading-tight relative z-10">
                        {slide.title}
                      </h2>
                      <p className="text-xl text-temple-brown mb-8 font-sans leading-relaxed max-w-md relative z-10">
                        {slide.subtitle}
                      </p>

                      <div className="inline-flex items-center gap-4 relative z-10">
                        {slide.link?.startsWith('http') ? (
                          <a
                            href={slide.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-3.5 rounded-full bg-green-600 text-white font-serif font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
                          >
                            <span className="mr-2">{slide.cta}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M15.821 14.121c-.241.682-1.199 1.247-1.963 1.412-.523.11-1.205.199-3.503-.754C7.774 13.71 4.19 9.901 4.19 7.366c0-1.29.744-2.793 2.045-2.793.626 0 .764.012.97.507.241.582.829 2.016.899 2.163.289.603-.294.956-.717 1.482-.135.158-.288.329-.117.623.17.288.758 1.246 1.622 2.015 1.116.995 2.021 1.312 2.345 1.447.241.1.529.077.705-.111.223-.241.5-.641.782-1.035.199-.283.452-.318.717-.218.179.062 2.454 1.119 2.55 1.288.071.123.071.705-.17 1.387M10.002 0h-.005C4.484 0 0 4.485 0 10c0 2.187.705 4.215 1.904 5.86L.658 19.577l3.843-1.229A9.9 9.9 0 0 0 10.002 20C15.515 20 20 15.515 20 10S15.515 0 10.002 0" fillRule="evenodd" />
                            </svg>
                          </a>
                        ) : (
                          <Link
                             to={slide.link || '#'}
                             className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary-600 text-white font-serif font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
                           >
                            {slide.cta}
                          </Link>
                        )}

                        {slide.price && (
                          <span className="text-temple-brown font-serif font-semibold bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-secondary-100 text-sm">
                            {slide.price}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ticker Section */}
      <div className="absolute bottom-0 w-full z-30">
        <HeroTicker />
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-14 left-0 w-full z-20 flex justify-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-secondary-300 ${
              currentSlide === index
                ? 'bg-primary-600 scale-110'
                : 'bg-transparent hover:bg-secondary-200'
            }`}
             aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
