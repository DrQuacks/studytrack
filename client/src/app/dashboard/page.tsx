import { Suspense } from 'react';
import Dashboard from '@/components/Dashboard';

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Study Dashboard</h1>
      <Suspense fallback={<p>Loading stats...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}