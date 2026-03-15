import React, { useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, Loader2 } from 'lucide-react';
import { DottedSurface } from '../ui/dotted-surface';
import { cn } from '../../lib/utils';
import { useAuthStore } from '../../store/authStore';

type Tab = 'google' | 'email';
type EmailMode = 'login' | 'register';

export function AuthPage() {
  const { loginWithGoogle, loginWithEmail, registerWithEmail, continueAsGuest, isLoading, error, clearError } = useAuthStore();

  const [tab, setTab] = useState<Tab>('google');
  const [emailMode, setEmailMode] = useState<EmailMode>('login');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');

  const displayError = localError || error;

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    if (!response.credential) return;
    clearError();
    setLocalError('');
    try {
      await loginWithGoogle(response.credential);
    } catch {
      // error shown via store
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    clearError();

    if (emailMode === 'register') {
      if (!name.trim()) { setLocalError('Please enter your name.'); return; }
      if (password.length < 6) { setLocalError('Password must be at least 6 characters.'); return; }
      try {
        await registerWithEmail(email.trim(), name.trim(), password);
      } catch {
        // error in store
      }
    } else {
      try {
        await loginWithEmail(email.trim(), password);
      } catch {
        // error in store
      }
    }
  };

  const switchEmailMode = (mode: EmailMode) => {
    setEmailMode(mode);
    setLocalError('');
    clearError();
    setPassword('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[100dvh] w-full overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col font-sans transition-colors duration-300"
    >
      <DottedSurface className="absolute inset-0 z-0 pointer-events-none" />

      {/* Glow */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-1/2 left-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full',
          'bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]',
          'blur-[80px]',
        )}
      />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-md px-6 mx-auto gap-7">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 mb-2">
            DataLens
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Turn raw data into compelling AI-powered stories.
          </p>
        </div>

        {/* Card */}
        <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Tab switcher */}
          <div className="flex border-b border-slate-100 dark:border-slate-800">
            {(['google', 'email'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setLocalError(''); clearError(); }}
                className={cn(
                  'flex-1 py-3 text-sm font-semibold transition-colors',
                  tab === t
                    ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                )}
              >
                {t === 'google' ? 'Google' : 'Email'}
              </button>
            ))}
          </div>

          <div className="p-7">
            {/* Error banner */}
            <AnimatePresence>
              {displayError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 flex items-start gap-2 px-3 py-2.5 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm"
                >
                  <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                  <span>{displayError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {/* ── Google Tab ── */}
              {tab === 'google' && (
                <motion.div
                  key="google"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex flex-col items-center gap-4"
                >
                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                    Sign in securely with your Google account.
                  </p>
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => setLocalError('Google sign-in failed. Please try again.')}
                    theme="outline"
                    size="large"
                    shape="pill"
                    text="signin_with"
                  />
                </motion.div>
              )}

              {/* ── Email Tab ── */}
              {tab === 'email' && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  {/* Login / Register toggle */}
                  <div className="flex gap-1 p-1 mb-5 bg-slate-100 dark:bg-slate-800/60 rounded-xl">
                    {(['login', 'register'] as EmailMode[]).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => switchEmailMode(mode)}
                        className={cn(
                          'flex-1 py-1.5 text-sm font-medium rounded-lg transition-all',
                          emailMode === mode
                            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                            : 'text-slate-500 dark:text-slate-400'
                        )}
                      >
                        {mode === 'login' ? 'Sign In' : 'Create Account'}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
                    {/* Name field — register only */}
                    <AnimatePresence>
                      {emailMode === 'register' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <InputField
                            icon={<User size={15} />}
                            type="text"
                            placeholder="Full name"
                            value={name}
                            onChange={setName}
                            required
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <InputField
                      icon={<Mail size={15} />}
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={setEmail}
                      required
                    />

                    <div className="relative">
                      <InputField
                        icon={<Lock size={15} />}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={setPassword}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                      >
                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-semibold text-sm transition-colors"
                    >
                      {isLoading
                        ? <Loader2 size={16} className="animate-spin" />
                        : emailMode === 'login' ? 'Sign In' : 'Create Account'}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
              <span className="text-xs text-slate-400">or</span>
              <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
            </div>

            {/* Guest */}
            <button
              onClick={continueAsGuest}
              className="w-full py-2.5 text-sm font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Continue as Guest
            </button>
            <p className="mt-2 text-xs text-slate-400 dark:text-slate-500 text-center">
              Guest sessions are temporary and not saved across visits.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Shared input component
// ---------------------------------------------------------------------------

interface InputFieldProps {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}

function InputField({ icon, type, placeholder, value, onChange, required }: InputFieldProps) {
  return (
    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus-within:border-emerald-500/60 transition-colors">
      <span className="text-slate-400 flex-shrink-0">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
      />
    </div>
  );
}
