'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // For now, we'll redirect to login after signup
    // Later this can be connected to your backend registration endpoint
    if (res.ok) {
      // Optionally redirect or auto-login
      signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
      });
    } else {
      const error = await res.json();
      console.error('Signup failed:', error.error);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 space-y-4">
      <h1 className="text-xl font-bold">Create an Account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        
        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer transition-colors"
        >
          Sign Up
        </button>
      </form>

      <div className="text-center text-sm text-gray-500">or</div>

      <button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer transition-colors"
      >
        Sign up with Google
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
} 