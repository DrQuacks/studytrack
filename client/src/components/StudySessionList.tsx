"use client";

import { gql, useQuery, useSuspenseQuery } from "@apollo/client";

type StudySession = {
    id: string;
    durationMinutes: number;
    date: string;
  };
  
  type GetStudySessionsResult = {
    studySessions: StudySession[];
  };

// const GET_STUDY_SESSIONS = gql`
//   query {
//     studySessions {
//       _id
//       durationMinutes
//       date
//     }
//   }
// `;

const GET_STUDY_SESSIONS = gql`
  query {
    studySessions {
        id
        durationMinutes
        date
    }
  }
`;

export default function StudySessionList() {
  const {data} = useSuspenseQuery<GetStudySessionsResult>(GET_STUDY_SESSIONS);

  return (
    <ul>
      {data.studySessions.map((session: any) => (
        <li key={session.id}>
          {session.durationMinutes} minutes on {new Date(session.date).toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
}