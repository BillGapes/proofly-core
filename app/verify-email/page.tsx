'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, ArrowRight } from 'lucide-react';

export default function VerifyEmailPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const storedCode = sessionStorage.getItem('verificationCode');
    
    if (code === storedCode) {
      // Code is correct! Proceed to welcome tour
      router.push('/onboard/tour');
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  const handleResend = () => {
    setIsResending(true);
    
    // Generate new code
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem('verificationCode', newCode);
    
    console.log('🔐 New Verification Code:', newCode);
    alert(`📧 New verification code (shown for testing): ${newCode}`);
    
    setTimeout(() => setIsResending(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Check your email</h1>
          <p className="text-slate-600">
            We sent a verification code to<br />
            <span className="font-medium text-slate-900">{email}</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100 p-8 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-slate-700 mb-2">
                Verification Code
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="000000"
                maxLength={6}
                className="w-full px-4 py-3 text-center text-2xl font-mono tracking-widest border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
            >
              Verify Email
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600 mb-2">Didn't receive the code?</p>
            <button
              onClick={handleResend}
              disabled={isResending}
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium disabled:opacity-50"
            >
              {isResending ? 'Sending...' : 'Resend Code'}
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            💡 Testing Mode: Code shown in alert
          </span>
        </p>
      </div>
    </div>
  );
}
