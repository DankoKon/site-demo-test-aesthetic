import { Clock, ArrowRight } from 'lucide-react';

type ServicesProps = {
  onBookClick: (service: string) => void;
};

const SERVICES = [
  {
    name: 'Комбинированная чистка лица',
    description: 'Глубокое очищение, удаление чёрных точек и воспалений для сияющей кожи.',
    duration: '90 мин',
    price: '3 500 ₽',
    image: 'https://images.pexels.com/photos/5069493/pexels-photo-5069493.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Безинъекционная мезотерапия',
    description: 'Безболезненное насыщение кожи витаминами и гиалуроновой кислотой.',
    duration: '60 мин',
    price: '4 500 ₽',
    image: 'https://images.pexels.com/photos/7446689/pexels-photo-7446689.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Пилинг + альгинатный уход',
    description: 'Деликатное отшелушивание и увлажнение альгинатной маской.',
    duration: '45 мин',
    price: '2 800 ₽',
    image: 'https://images.pexels.com/photos/37240358/pexels-photo-37240358.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services({ onBookClick }: ServicesProps) {
  return (
    <section className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm text-rose-500 font-medium tracking-widest uppercase mb-3">
            Наши услуги
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-700 mb-4">
            Популярные процедуры
          </h2>
          <p className="text-sage-400 max-w-lg mx-auto">
            Авторские методики для заботы о вашей коже — без боли и агрессивного воздействия.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="group bg-cream-50 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border border-cream-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-800/20 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-cream-50/90 backdrop-blur-sm text-sage-700 text-sm font-medium">
                  {service.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-sage-700 mb-2">{service.name}</h3>
                <p className="text-sage-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sage-500 text-sm mb-5">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>

                <button
                  onClick={() => onBookClick(service.name)}
                  className="inline-flex items-center gap-2 text-sage-600 font-medium hover:gap-3 transition-all"
                >
                  Записаться
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
