import StudySessionList from "@/components/StudySessionList";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Study Sessions</h1>
      <StudySessionList />
    </main>
  );
}