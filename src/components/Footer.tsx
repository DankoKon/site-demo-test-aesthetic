import { Phone, Mail, MapPin, Clock, Instagram, Send, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-700 text-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-cream-50/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-cream-100" />
              </div>
              <span className="text-xl font-serif">Эстетика</span>
            </div>
            <p className="text-cream-200/70 text-sm leading-relaxed">
              Студия косметологии и эстетики лица. Естественный подход к красоте вашей кожи.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-cream-200/50 mb-5">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-rose-300 flex-shrink-0" />
                <a href="tel:+70000000000" className="hover:text-cream-50 transition-colors">
                  +7 (000) 000-00-00
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-rose-300 flex-shrink-0" />
                <a href="mailto:hello@estetika.ru" className="hover:text-cream-50 transition-colors">
                  hello@estetika.ru
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-rose-300 flex-shrink-0 mt-0.5" />
                <span>г. Москва, ул. Тверская, д. 10</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-cream-200/50 mb-5">
              Часы работы
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-rose-300 flex-shrink-0" />
                <div>
                  <p>Пн — Пт: 10:00 — 20:00</p>
                  <p className="text-cream-200/60">Сб — Вс: 11:00 — 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-cream-200/50 mb-5">
              Мы в соцсетях
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center hover:bg-cream-50/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center hover:bg-cream-50/20 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-200/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-200/50 text-xs">
            © 2026 Эстетика. Все права защищены.
          </p>
          <p className="text-cream-200/50 text-xs">
            Дизайн с заботой о вашей коже
          </p>
        </div>
      </div>
    </footer>
  );
}
