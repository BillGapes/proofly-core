'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Star, Briefcase, ArrowRight, ArrowLeft } from 'lucide-react';

const tourCards = [
  {
    id: 1,
    icon: Sparkles,
    gradient: 'from-indigo-500 to-indigo-600',
    title: 'Welcome to Proofly 👋',
    description: 'Your verified credibility profile that showcases real skills and authentic references from people who\'ve worked with you.',
  },
  {
    id: 2,
    icon: Star,
    gradient: 'from-violet-500 to-violet-600',
    title: 'Earn your Proofly Score',
    description: 'Get rated by peers and managers on your skills. Higher-ups carry more weight, recent feedback matters most.',
  },
  {
    id: 3,
    icon: Briefcase,
    gradient: 'from-cyan-500 to-cyan-600',
    title: 'Stand out to employers',
    description: 'Connect, verify, and share your proven credibility. Let your professional network speak for itself.',
  },
  {
    id: 4,
    icon: ArrowRight,
    gradient: 'from-pink-500 to-pink-600',
    title: 'Let\'s set up your profile',
    description: 'It only takes 2 minutes! Add your info, skills, and start building your verified reputation.',
    isFinal: true,
  },
];

export default function TourPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const router = useRouter();
  const card = tourCards[currentCard];
  const Icon = card.icon;

  const handleNext = () => {
    if (currentCard < tourCards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      router.push('/onboard/setup');
    }
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {tourCards.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentCard
                  ? 'w-8 bg-gradient-to-r from-indigo-600 to-cyan-600'
                  : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-100 p-12 border border-slate-100 text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-2xl mb-6`}>
            <Icon className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {card.title}
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            {card.description}
          </p>

          <div className="flex gap-3">
            {currentCard > 0 && (
              <button
                onClick={handlePrev}
                className="flex-1 py-3 px-6 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className={`py-3 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 ${
                currentCard === 0 ? 'w-full' : 'flex-1'
              }`}
            >
              {card.isFinal ? 'Start Profile Setup' : 'Next'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          {currentCard + 1} / {tourCards.length}
        </p>
      </div>
    </div>
  );
}
