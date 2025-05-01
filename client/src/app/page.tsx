import StudySessionList from "@/components/StudySessionList";
import StudySessionForm from '@/components/StudySessionForm';


export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Log a Study Session</h1>
      <StudySessionForm />
      <h1 className="text-3xl font-bold mb-4">Study Sessions</h1>
      <StudySessionList />
    </main>
  );
}