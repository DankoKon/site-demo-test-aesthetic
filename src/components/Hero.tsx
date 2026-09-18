import { Sparkles, ArrowDown, Star } from 'lucide-react';

type HeroProps = {
  onBookClick: () => void;
};

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Спа-процедура для лица"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/80 to-cream-50/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50/60 via-transparent to-cream-50/20" />
      </div>

 {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/90 backdrop-blur-sm border border-rose-200/50 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span className="text-sm text-rose-700 font-medium">
              Скидка 15% на первый визит
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-sage-700 leading-[1.15] mb-6 text-balance animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            Естественная красота и уход за кожей без агрессивных методик
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg text-sage-500 leading-relaxed mb-10 max-w-xl animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Авторские программы омоложения и чистки лица от дипломированного косметолога.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <button
              onClick={onBookClick}
              className="px-8 py-4 rounded-full bg-sage-500 text-cream-50 font-medium hover:bg-sage-600 transition-all hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Записаться на процедуру
            </button>

            <div className="flex items-center gap-2 px-2 py-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-rose-300 text-rose-300"
                  />
                ))}
              </div>
              <span className="text-sm text-sage-400">
                <span className="font-semibold text-sage-600">4.9</span> · 320+ отзывов
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-sage-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="text-xs tracking-widest uppercase">Подробнее</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
