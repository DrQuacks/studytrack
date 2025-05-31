import type { Metadata } from "next";
import "./globals.css";
import ApolloWrapper from "../components/ApolloProvider";
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StudyTrack',
  description: 'Track your learning progress',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <nav className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
            {/* Left side: site nav links */}
            <div className="flex items-center gap-6">
              <Link href="/" className="text-lg font-semibold text-blue-600 hover:underline">
                StudyTrack
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
                Dashboard
              </Link>
            </div>

            {/* Right side: auth actions (placeholder for now) */}
            <div className="flex items-center gap-3">
              <Link 
                href="/login"
                className="text-sm text-gray-700 hover:text-blue-600 transition"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </div>
          </nav>
          <main className="max-w-4xl mx-auto px-4">
            {children}
          </main>
        </ApolloWrapper>
      </body>
    </html>
  );
}
