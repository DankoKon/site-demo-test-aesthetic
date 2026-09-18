import { useState, useEffect } from 'react';
import { X, Calendar, Phone, User, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase, type BookingInsert } from '@/lib/supabase';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
};

const SERVICES = [
  'Комбинированная чистка лица',
  'Безинъекционная мезотерапия',
  'Пилинг + альгинатный уход',
  'Консультация косметолога',
  'Другая услуга',
];

export default function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [datetime, setDatetime] = useState('');
  const [service, setService] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!name.trim() || !phone.trim() || !datetime || !service) {
      setStatus('error');
      setErrorMessage('Пожалуйста, заполните все поля.');
      return;
    }

    const booking: BookingInsert = {
      name: name.trim(),
      phone: phone.trim(),
      desired_datetime: new Date(datetime).toISOString(),
      service,
    };

    const { error } = await supabase.from('bookings').insert(booking);

    if (error) {
      setStatus('error');
      setErrorMessage('Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.');
      return;
    }

    setStatus('success');
    setName('');
    setPhone('');
    setDatetime('');
    setService('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-sage-800/40 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg bg-cream-50 rounded-3xl shadow-soft-xl p-8 animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-sage-400 hover:text-sage-700 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 mb-6">
              <CheckCircle2 className="w-8 h-8 text-sage-500" />
            </div>
            <h3 className="text-2xl font-serif text-sage-700 mb-3">Заявка отправлена!</h3>
            <p className="text-sage-500 leading-relaxed mb-6">
              Спасибо, {name || 'мы свяжемся с вами'} в ближайшее время для подтверждения записи.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-sage-500 text-cream-50 font-medium hover:bg-sage-600 transition-colors"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-serif text-sage-700 mb-2">Запись на процедуру</h3>
              <p className="text-sage-400 text-sm">
                Заполните форму, и мы свяжемся с вами для подтверждения.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-sage-600 mb-2 font-medium">Имя</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-300" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-cream-100 border border-cream-200 text-sage-800 placeholder-sage-300 focus:outline-none focus:border-sage-300 focus:ring-1 focus:ring-sage-300 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-sage-600 mb-2 font-medium">Телефон</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-300" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-cream-100 border border-cream-200 text-sage-800 placeholder-sage-300 focus:outline-none focus:border-sage-300 focus:ring-1 focus:ring-sage-300 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-sage-600 mb-2 font-medium">
                  Желаемая дата и время
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-300 z-10" />
                  <input
                    type="datetime-local"
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-cream-100 border border-cream-200 text-sage-800 placeholder-sage-300 focus:outline-none focus:border-sage-300 focus:ring-1 focus:ring-sage-300 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-sage-600 mb-2 font-medium">Услуга</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-cream-200 text-sage-800 focus:outline-none focus:border-sage-300 focus:ring-1 focus:ring-sage-300 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Выберите услугу
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {status === 'error' && (
                <p className="text-rose-600 text-sm bg-rose-50 rounded-xl px-4 py-3">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-full bg-sage-500 text-cream-50 font-medium hover:bg-sage-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Отправляем заявку...
                  </>
                ) : (
                  'Записаться'
                )}
              </button>

              <p className="text-xs text-sage-300 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
