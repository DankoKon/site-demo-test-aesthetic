import { useState } from 'react';
import { Instagram, Image as ImageIcon } from 'lucide-react';

const BEFORE_AFTER = [
  {
    before: 'https://images.pexels.com/photos/3762405/pexels-photo-3762405.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/3762758/pexels-photo-3762758.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Чистка лица · 3 сеанса',
  },
  {
    before: 'https://images.pexels.com/photos/4154187/pexels-photo-4154187.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/8989973/pexels-photo-8989973.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Мезотерапия · 5 сеансов',
  },
  {
    before: 'https://images.pexels.com/photos/29752614/pexels-photo-29752614.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/6543324/pexels-photo-6543324.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Пилинг + альгинат · 4 сеанса',
  },
];

const GRID_IMAGES = [
  'https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3764552/pexels-photo-3764552.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/13899845/pexels-photo-13899845.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/22589552/pexels-photo-22589552.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/16120497/pexels-photo-16120497.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/37229302/pexels-photo-37229302.jpeg?auto=compress&cs=tinysrgb&w=600',
];

export default function Gallery() {
  const [tab, setTab] = useState<'before-after' | 'grid'>('before-after');

  return (
    <section className="py-24 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm text-rose-500 font-medium tracking-widest uppercase mb-3">
            Результаты
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-700 mb-4">
            Галерея работ
          </h2>
          <p className="text-sage-400 max-w-lg mx-auto">
            Реальные результаты наших клиентов до и после прохождения курса процедур.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setTab('before-after')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              tab === 'before-after'
                ? 'bg-sage-500 text-cream-50'
                : 'bg-cream-200 text-sage-500 hover:bg-cream-300'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            До / После
          </button>
          <button
            onClick={() => setTab('grid')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              tab === 'grid'
                ? 'bg-sage-500 text-cream-50'
                : 'bg-cream-200 text-sage-500 hover:bg-cream-300'
            }`}
          >
            <Instagram className="w-4 h-4" />
            Галерея
          </button>
        </div>

        {/* Before/After view */}
        {tab === 'before-after' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {BEFORE_AFTER.map((item, idx) => (
              <div
                key={idx}
                className="bg-cream-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow group"
              >
                <div className="grid grid-cols-2 gap-px bg-cream-200">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.before}
                      alt="До процедуры"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sage-800/70 text-cream-50 text-xs font-medium backdrop-blur-sm">
                      До
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.after}
                      alt="После процедуры"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-500/80 text-cream-50 text-xs font-medium backdrop-blur-sm">
                      После
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <p className="text-sage-600 text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Instagram-style grid */}
        {tab === 'grid' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
            {GRID_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Галерея ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-sage-800/0 group-hover:bg-sage-800/20 transition-colors flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Instagram link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sage-500 hover:text-sage-700 transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            Больше фото в нашем Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
