import { useState } from 'react';
import { Droplet, Sun, Heart, Check, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';

type QuizProps = {
  onBookClick: (service: string) => void;
};

const SKIN_TYPES = [
  { id: 'dry', label: 'Сухая', icon: Droplet },
  { id: 'oily', label: 'Жирная', icon: Sun },
  { id: 'combo', label: 'Комбинированная', icon: Heart },
  { id: 'sensitive', label: 'Чувствительная', icon: Sparkles },
];

const CONCERNS = [
  { id: 'acne', label: 'Акне и высыпания' },
  { id: 'pigmentation', label: 'Пигментация' },
  { id: 'wrinkles', label: 'Морщины' },
  { id: 'pores', label: 'Расширенные поры' },
  { id: 'dull', label: 'Тусклый цвет лица' },
  { id: 'dryness', label: 'Сухость и стянутость' },
];

const RESULTS = [
  { id: 'hydrate', label: 'Увлажнение и питание' },
  { id: 'rejuvenate', label: 'Омоложение' },
  { id: 'cleanse', label: 'Глубокое очищение' },
  { id: 'even', label: 'Выравнивание тона' },
];

type Recommendation = {
  service: string;
  description: string;
};

function getRecommendation(
  skinType: string,
  concern: string,
  result: string
): Recommendation {
  if (concern === 'acne' || concern === 'pores' || result === 'cleanse') {
    return {
      service: 'Комбинированная чистка лица',
      description:
        'Глубокое очищение пор, удаление воспалений и высыпаний. Кожа дышит и сияет чистотой.',
    };
  }
  if (concern === 'wrinkles' || result === 'rejuvenate') {
    return {
      service: 'Безинъекционная мезотерапия',
      description:
        'Безболезненное насыщение кожи витаминами и гиалуроновой кислотой. Видимый лифтинг-эффект.',
    };
  }
  if (concern === 'pigmentation' || concern === 'dull' || result === 'even') {
    return {
      service: 'Пилинг + альгинатный уход',
      description:
        'Деликатное отшелушивание и увлажнение. Выравнивание тона и сияющий цвет лица.',
    };
  }
  return {
    service: 'Комбинированная чистка лица',
    description:
      'Универсальная процедура для любого типа кожи — очищение, увлажнение и свежий вид.',
  };
}

export default function Quiz({ onBookClick }: QuizProps) {
  const [step, setStep] = useState(0);
  const [skinType, setSkinType] = useState('');
  const [concern, setConcern] = useState('');
  const [result, setResult] = useState('');
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const steps = ['Тип кожи', 'Главная проблема', 'Желаемый результат'];

  const handleSkinTypeSelect = (id: string) => {
    setSkinType(id);
    setTimeout(() => setStep(1), 300);
  };

  const handleConcernSelect = (id: string) => {
    setConcern(id);
    setTimeout(() => setStep(2), 300);
  };

  const handleResultSelect = (id: string) => {
    setResult(id);
    const rec = getRecommendation(skinType, concern, id);
    setRecommendation(rec);
    setTimeout(() => setStep(3), 300);
  };

  const handleRestart = () => {
    setStep(0);
    setSkinType('');
    setConcern('');
    setResult('');
    setRecommendation(null);
  };

  return (
    <section className="py-24 lg:py-32 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm text-rose-500 font-medium tracking-widest uppercase mb-3">
            Персональный подбор
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-700 mb-4">
            Подберите уход за 30 секунд
          </h2>
          <p className="text-sage-400 max-w-lg mx-auto">
            Ответьте на три простых вопроса, и мы порекомендуем идеальную процедуру для вашей кожи.
          </p>
        </div>

        {/* Quiz card */}
        <div className="bg-cream-50 rounded-3xl shadow-soft-lg p-8 lg:p-12">
          {/* Progress */}
          {step < 3 && (
            <div className="flex items-center justify-center gap-2 mb-10">
              {steps.map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        i <= step
                          ? 'bg-sage-500 text-cream-50'
                          : 'bg-cream-200 text-sage-300'
                      }`}
                    >
                      {i < step ? <Check className="w-4 h-4" /> : i + 1}
                    </div>
                    <span
                      className={`text-sm hidden sm:inline transition-colors ${
                        i <= step ? 'text-sage-600 font-medium' : 'text-sage-300'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-8 sm:w-12 h-px transition-colors ${
                        i < step ? 'bg-sage-400' : 'bg-cream-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Step 0: Skin type */}
          {step === 0 && (
            <div className="animate-fade-up">
              <h3 className="text-xl font-serif text-sage-700 text-center mb-8">
                Выберите тип вашей кожи
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {SKIN_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = skinType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => handleSkinTypeSelect(type.id)}
                      className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all hover:shadow-soft ${
                        isSelected
                          ? 'border-sage-400 bg-sage-50'
                          : 'border-cream-200 bg-cream-50 hover:border-sage-200'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-sage-400 text-cream-50' : 'bg-cream-100 text-sage-400'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sage-600 font-medium">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 1: Main concern */}
          {step === 1 && (
            <div className="animate-fade-up">
              <h3 className="text-xl font-serif text-sage-700 text-center mb-8">
                Ваша главная проблема
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONCERNS.map((item) => {
                  const isSelected = concern === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleConcernSelect(item.id)}
                      className={`flex items-center gap-3 p-5 rounded-2xl border-2 text-left transition-all hover:shadow-soft ${
                        isSelected
                          ? 'border-sage-400 bg-sage-50'
                          : 'border-cream-200 bg-cream-50 hover:border-sage-200'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected ? 'border-sage-400 bg-sage-400' : 'border-cream-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-cream-50" />}
                      </div>
                      <span className="text-sage-600 font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Desired result */}
          {step === 2 && (
            <div className="animate-fade-up">
              <h3 className="text-xl font-serif text-sage-700 text-center mb-8">
                Желаемый результат
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESULTS.map((item) => {
                  const isSelected = result === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleResultSelect(item.id)}
                      className={`flex items-center gap-3 p-5 rounded-2xl border-2 text-left transition-all hover:shadow-soft ${
                        isSelected
                          ? 'border-sage-400 bg-sage-50'
                          : 'border-cream-200 bg-cream-50 hover:border-sage-200'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected ? 'border-sage-400 bg-sage-400' : 'border-cream-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-cream-50" />}
                      </div>
                      <span className="text-sage-600 font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Recommendation */}
          {step === 3 && recommendation && (
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-6">
                <Sparkles className="w-8 h-8 text-rose-400" />
              </div>
              <p className="text-sm text-rose-500 font-medium tracking-widest uppercase mb-3">
                Ваша рекомендация
              </p>
              <h3 className="text-2xl lg:text-3xl font-serif text-sage-700 mb-4">
                {recommendation.service}
              </h3>
              <p className="text-sage-500 leading-relaxed max-w-md mx-auto mb-8">
                {recommendation.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onBookClick(recommendation.service)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sage-500 text-cream-50 font-medium hover:bg-sage-600 transition-all hover:shadow-soft-lg hover:-translate-y-0.5"
                >
                  Записаться на процедуру
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sage-500 font-medium hover:bg-cream-100 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Пройти заново
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
