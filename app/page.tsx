'use client';

import { useState } from 'react';
import { Shield, Star, Users, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';

export default function Page() {
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Proofly
          </h1>
          <a href="/employer/search" className="text-sm text-indigo-600 hover:text-indigo-700">
            Employer Search →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Value Proposition */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-full text-indigo-700 text-sm font-medium mb-6 w-fit">
              <Sparkles className="w-4 h-4" />
              Your credibility, verified
            </div>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              References that
              <span className="block bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                actually mean something
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-8">
              Stop relying on self-reported skills and mystery references. Proofly gives you verified, weighted ratings from people who've actually worked with you.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">ID-Verified Profiles</h3>
                  <p className="text-sm text-slate-600">Real people, real credentials. No fake reviews.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Weighted Ratings</h3>
                  <p className="text-sm text-slate-600">Manager reviews count more than classmates. Recency matters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Proofly Score (0-100)</h3>
                  <p className="text-sm text-slate-600">One number that tells employers your credibility level.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Standout Stories</h3>
                  <p className="text-sm text-slate-600">Qualitative highlights that show what makes you unique.</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-slate-900">14</div>
                <div className="text-sm text-slate-600">Verified Profiles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">33</div>
                <div className="text-sm text-slate-600">Skill Ratings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">ID Verified</div>
              </div>
            </div>
          </div>

          {/* Right Column - Auth Form */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-100 p-8 border border-slate-100">
              {/* Toggle */}
              <div className="flex gap-2 p-1 bg-slate-100 rounded-xl mb-8">
                <button
                  onClick={() => setAuthMode('signup')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    authMode === 'signup'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => setAuthMode('login')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    authMode === 'login'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Log In
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                {authMode === 'signup' && (
                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="terms" className="text-sm text-slate-600">
                      I agree to the Terms of Service and Privacy Policy
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  {authMode === 'signup' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Create Account
                    </>
                  ) : (
                    'Log In'
                  )}
                </button>
              </form>

              {authMode === 'login' && (
                <div className="text-center mt-4">
                  <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">or continue with</span>
                </div>
              </div>

              {/* OAuth Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 px-4 border border-slate-300 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm font-medium text-slate-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button className="py-3 px-4 border border-slate-300 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm font-medium text-slate-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-slate-600 mt-6">
              {authMode === 'signup' ? (
                <>
                  Already have an account?{' '}
                  <button onClick={() => setAuthMode('login')} className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Log in
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <button onClick={() => setAuthMode('signup')} className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Sign up
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
