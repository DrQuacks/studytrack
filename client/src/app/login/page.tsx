'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="max-w-sm mx-auto mt-12 space-y-4">
      <h1 className="text-xl font-bold">Login</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          });
        }}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer transition-colors">
          Log In
        </button>
      </form>

      <div className="text-center text-sm text-gray-500">or</div>

      <button
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer transition-colors"
      >
        Sign in with Google
      </button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}