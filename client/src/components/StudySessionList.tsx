"use client";

import { gql, useQuery } from "@apollo/client";

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
      durationMinutes
      date
    }
  }
`;

export default function StudySessionList() {
  const { data, loading, error } = useQuery(GET_STUDY_SESSIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="space-y-2">
      {data.studySessions.map((session: any) => {
          console.log('session: ',session)
          return (
            <li key={session._id}>
                {session.durationMinutes} minutes on{" "}
                {new Date(session.date).toLocaleDateString()}
            </li>
          )
      })}
    </ul>
  );
}