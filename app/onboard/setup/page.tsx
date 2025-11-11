'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { User, Briefcase, Brain, Image as ImageIcon, CheckCircle2, X } from 'lucide-react';

const COMMON_SKILLS = [
  'Project Management', 'Communication', 'Problem Solving', 'Collaboration',
  'Leadership', 'Data Analysis', 'Customer Service', 'Sales',
  'Marketing', 'Design', 'Engineering', 'Writing', 'Public Speaking',
  'Negotiation', 'Strategic Thinking', 'Time Management'
];

export default function SetupPage() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: typeof window !== 'undefined' ? sessionStorage.getItem('signupName') || '' : '',
    headline: '',
    skills: [] as string[],
    experienceLevel: '',
    mbti: '',
    photoUrl: '',
    bio: '',
  });
  const router = useRouter();

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Full name is required';
      }
      if (!formData.headline.trim()) {
        newErrors.headline = 'Professional headline is required';
      }
    }

    if (stepNumber === 2) {
      if (formData.skills.length < 3) {
        newErrors.skills = 'Please select at least 3 skills';
      }
      if (formData.skills.length > 6) {
        newErrors.skills = 'Please select no more than 6 skills';
      }
      if (!formData.experienceLevel) {
        newErrors.experienceLevel = 'Experience level is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setErrors({});
      setStep(step - 1);
    }
  };

  const toggleSkill = (skill: string) => {
    setFormData(prev => {
      const isSelected = prev.skills.includes(skill);
      const newSkills = isSelected
        ? prev.skills.filter(s => s !== skill)
        : prev.skills.length < 6
          ? [...prev.skills, skill]
          : prev.skills;
      
      return { ...prev, skills: newSkills };
    });
    // Clear skills error when user makes a change
    if (errors.skills) {
      setErrors(prev => ({ ...prev, skills: '' }));
    }
  };

  const handleFinish = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate step 4 before finishing (currently no required fields, but future-proof)
    if (!validateStep(4)) {
      return;
    }
    
    // Generate handle from name
    const handle = formData.name.toLowerCase().replace(/\s+/g, '');
    
    // Store user data in sessionStorage (in production, this would go to DB)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('newUser', JSON.stringify({
        ...formData,
        handle,
        email: sessionStorage.getItem('signupEmail'),
      }));
    }

    // Redirect to confirmation page (step 5)
    setStep(5);
  };

  const goToProfile = () => {
    const handle = formData.name.toLowerCase().replace(/\s+/g, '');
    router.push(`/u/${handle}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">
              Step {step} of 5
            </span>
            <span className="text-sm font-medium text-indigo-600">
              {Math.round((step / 5) * 100)}% Complete
            </span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-cyan-600 transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-100 p-8 border border-slate-100">
          {/* Step 1: Name + Headline */}
          {step === 1 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Your Identity</h2>
                  <p className="text-sm text-slate-600">Tell us who you are</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    placeholder="Jane Smith"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Professional Headline
                  </label>
                  <input
                    type="text"
                    value={formData.headline}
                    onChange={(e) => {
                      setFormData({ ...formData, headline: e.target.value });
                      if (errors.headline) setErrors(prev => ({ ...prev, headline: '' }));
                    }}
                    placeholder="Senior Product Manager | SaaS & Fintech"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                      errors.headline
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.headline ? (
                    <p className="mt-1 text-sm text-red-600">{errors.headline}</p>
                  ) : (
                    <p className="mt-1 text-xs text-slate-500">
                      This appears under your name on your profile
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Skills + Experience */}
          {step === 2 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Skills & Experience</h2>
                  <p className="text-sm text-slate-600">What are you great at?</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select your top skills (choose 3-6)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {COMMON_SKILLS.map(skill => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        disabled={!formData.skills.includes(skill) && formData.skills.length >= 6}
                        className={`px-4 py-2 rounded-lg border-2 transition-all ${
                          formData.skills.includes(skill)
                            ? 'bg-indigo-50 border-indigo-600 text-indigo-700 font-medium'
                            : formData.skills.length >= 6
                            ? 'border-slate-200 text-slate-400 cursor-not-allowed'
                            : 'border-slate-300 text-slate-700 hover:border-slate-400'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  {errors.skills ? (
                    <p className="mt-2 text-sm text-red-600">{errors.skills}</p>
                  ) : (
                    <p className="mt-2 text-xs text-slate-500">
                      Selected: {formData.skills.length} skill{formData.skills.length !== 1 ? 's' : ''}
                      {formData.skills.length >= 6 && ' (maximum reached)'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => {
                      setFormData({ ...formData, experienceLevel: e.target.value });
                      if (errors.experienceLevel) setErrors(prev => ({ ...prev, experienceLevel: '' }));
                    }}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                      errors.experienceLevel
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 focus:ring-indigo-500'
                    }`}
                  >
                    <option value="">Select experience level</option>
                    <option value="Entry">Entry Level (0-2 years)</option>
                    <option value="Mid">Mid Level (3-5 years)</option>
                    <option value="Senior">Senior (6-10 years)</option>
                    <option value="Lead">Lead/Principal (10+ years)</option>
                  </select>
                  {errors.experienceLevel && (
                    <p className="mt-1 text-sm text-red-600">{errors.experienceLevel}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: MBTI (Optional) */}
          {step === 3 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Cultural Fit</h2>
                  <p className="text-sm text-slate-600">Optional: Connect your MBTI</p>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-indigo-900 mb-2">Why MBTI?</h3>
                <p className="text-sm text-indigo-700">
                  Employers can match candidates by personality type for better team fit. This is completely optional and can be added later.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  MBTI Type (Optional)
                </label>
                <select
                  value={formData.mbti}
                  onChange={(e) => setFormData({ ...formData, mbti: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Skip for now</option>
                  <option value="INTJ">INTJ - The Architect</option>
                  <option value="INTP">INTP - The Logician</option>
                  <option value="ENTJ">ENTJ - The Commander</option>
                  <option value="ENTP">ENTP - The Debater</option>
                  <option value="INFJ">INFJ - The Advocate</option>
                  <option value="INFP">INFP - The Mediator</option>
                  <option value="ENFJ">ENFJ - The Protagonist</option>
                  <option value="ENFP">ENFP - The Campaigner</option>
                  <option value="ISTJ">ISTJ - The Logistician</option>
                  <option value="ISFJ">ISFJ - The Defender</option>
                  <option value="ESTJ">ESTJ - The Executive</option>
                  <option value="ESFJ">ESFJ - The Consul</option>
                  <option value="ISTP">ISTP - The Virtuoso</option>
                  <option value="ISFP">ISFP - The Adventurer</option>
                  <option value="ESTP">ESTP - The Entrepreneur</option>
                  <option value="ESFP">ESFP - The Entertainer</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 4: Photo + Bio */}
          {step === 4 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Profile Details</h2>
                  <p className="text-sm text-slate-600">Make a great first impression</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Profile Photo URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.photoUrl}
                    onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Leave blank to use a generated avatar
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Professional Summary
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Tell employers about your experience, passions, and what makes you unique..."
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                You're all set! 🎉
              </h2>

              <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 mb-6">
                <div className="mb-4">
                  <div className="text-sm font-medium text-slate-600 mb-1">Your Proofly Score</div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                    35
                  </div>
                  <div className="text-sm text-slate-600 mt-1">out of 100</div>
                </div>

                <div className="h-4 bg-white rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600"
                    style={{ width: '35%' }}
                  />
                </div>

                <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  Early Stage
                </div>

                <p className="text-sm text-slate-600 mt-4">
                  Ready to grow it? Get verified by colleagues and watch your score rise!
                </p>
              </div>

              <button
                onClick={goToProfile}
                className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-lg shadow-indigo-200"
              >
                Go to My Profile
              </button>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex gap-3 mt-8 pt-6 border-t border-slate-200">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 px-6 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all"
                >
                  Back
                </button>
              )}
              <button
                onClick={step === 4 ? handleFinish : handleNext}
                disabled={
                  (step === 1 && (!formData.name || !formData.headline)) ||
                  (step === 2 && (formData.skills.length < 3 || !formData.experienceLevel))
                }
                className={`py-3 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  step === 1 ? 'w-full' : 'flex-1'
                }`}
              >
                {step === 4 ? 'Finish Setup' : 'Continue'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
