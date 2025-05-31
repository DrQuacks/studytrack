import { Suspense } from 'react';
import Dashboard from '@/components/Dashboard';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function DashboardPage() {

    const session = await auth();

    console.log('session is: ',session)
    if (!session) {
      redirect('/login');
    }
    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Study Dashboard</h1>
        <Suspense fallback={<p>Loading stats...</p>}>
            <Dashboard />
        </Suspense>
        </div>
    );
}