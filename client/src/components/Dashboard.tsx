'use client';

import { useSuspenseQuery } from '@apollo/client';
import { GET_STUDY_SESSIONS } from '@/graphql/queries/getStudySessions';
import { GetStudySessionsQuery } from '@/graphql/generated/graphql';
import { format, isThisWeek, parseISO } from 'date-fns';

export default function Dashboard() {
  const { data } = useSuspenseQuery<GetStudySessionsQuery>(GET_STUDY_SESSIONS);

  const sessionsThisWeek = data.studySessions.filter((s) =>
    isThisWeek(parseISO(s.date))
  );

  const totalMinutes = sessionsThisWeek.reduce(
    (sum, s) => sum + s.durationMinutes,
    0
  );

  const byPath = sessionsThisWeek.reduce<Record<string, number>>((acc, s) => {
    acc[s.learningPath] = (acc[s.learningPath] || 0) + s.durationMinutes;
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      <p className="text-lg">
        📆 You’ve studied <strong>{totalMinutes}</strong> minutes this week.
      </p>

      <div>
        <h2 className="font-semibold mb-1">🧠 Minutes by Learning Path:</h2>
        <ul className="pl-4 list-disc">
          {Object.entries(byPath).map(([pathId, minutes]) => (
            <li key={pathId}>
              {pathId}: {minutes} min
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}