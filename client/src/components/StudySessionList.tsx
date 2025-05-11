"use client";

import { useSuspenseQuery } from "@apollo/client";
import { GET_STUDY_SESSIONS } from "@/graphql/queries/getStudySessions";
import SafeDate from "./SafeDate";

type StudySession = {
    id: string;
    durationMinutes: number;
    date: string;
  };
  
  type GetStudySessionsResult = {
    studySessions: StudySession[];
  };

export default function StudySessionList() {
  const {data} = useSuspenseQuery<GetStudySessionsResult>(GET_STUDY_SESSIONS);

  return (
    <ul>
      {data.studySessions.map((session: any) => (
        <li key={session.id}>
          {/* {session.durationMinutes} minutes on {new Date(session.date).toLocaleDateString()} */}
          {session.durationMinutes} minutes on {<SafeDate iso = {session.date}/>}
        </li>
      ))}
    </ul>
  );
}