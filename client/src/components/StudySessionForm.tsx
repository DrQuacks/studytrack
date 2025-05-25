'use client';

import React, { useState } from 'react';
import { gql, useQuery, useSuspenseQuery, useMutation } from '@apollo/client';
import { GET_LEARNING_PATHS } from '@/graphql/queries/getLearningPaths';
import { ADD_STUDY_SESSION } from '@/graphql/mutations/addStudySession';
import { GET_STUDY_SESSIONS } from '@/graphql/queries/getStudySessions';
import {
    GetLearningPathsQuery,
    AddStudySessionMutation,
    AddStudySessionMutationVariables,
  } from '@/graphql/generated/graphql';



const StudySessionForm = () => {
    const [formData, setFormData] = useState({
        learningPath: '',
        durationMinutes: '',
        date: new Date().toISOString().slice(0, 16), // format as yyyy-MM-ddThh:mm
        // date: new Date().toISOString().split("T")[0], // format as YYYY-MM-DD for input[type="date"]
    });

    const { data } = useSuspenseQuery<GetLearningPathsQuery>(GET_LEARNING_PATHS);
    const [addStudySession, { error: mutationError }] = useMutation<AddStudySessionMutation,AddStudySessionMutationVariables>(ADD_STUDY_SESSION, {
        optimisticResponse: ({ input }) => ({
            __typename: 'Mutation',
            addStudySession: {
            __typename: 'StudySession',
            id: `temp-id-${Math.random()}`,
            date: input.date,
            durationMinutes: input.durationMinutes,
            learningPath: input.learningPath, // If this is just an ID (not object), this is fine
            user: input.user,
            },
        }),
        update: (cache, { data }) => {
            const newSession = data?.addStudySession;
            if (!newSession) return;

            const existing = cache.readQuery({ query: GET_STUDY_SESSIONS }) as {
            studySessions: typeof newSession[];
            };

            if (existing) {
            cache.writeQuery({
                query: GET_STUDY_SESSIONS,
                data: {
                studySessions: [...existing.studySessions, newSession],
                },
            });
            }
        },
        });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
          await addStudySession({
            variables: {
              input: {
                learningPath: formData.learningPath,
                durationMinutes: parseInt(formData.durationMinutes, 10),
                date: new Date(formData.date).toISOString(),
                user: "6809bf5c395482877f920855", // ⬅️ Replace this with a real user ID or fetch it from auth later
              },
            },
          });
                setFormData({ learningPath: "", durationMinutes: "", date: "" });
      
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded shadow">
        <div>
            <label className="block font-medium mb-1">Learning Path</label>
            <select
            name="learningPath"
            value={formData.learningPath}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            >
            <option value="">Select a learning path</option>
            {data?.learningPaths.map((lp: any) => (
                    <option key={lp.id} value={lp.id}>
                    {lp.title}
                    </option>
                ))}
            </select>
        </div>

        <div>
            <label className="block font-medium mb-1">Duration (minutes)</label>
            <input
            type="number"
            name="durationMinutes"
            value={formData.durationMinutes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            />
        </div>

        <div>
            <label className="block font-medium mb-1">Date</label>
            <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />
        </div>

        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Add Study Session
        </button>

        {mutationError && (
            <p className="text-red-600 mt-2">Something went wrong: {mutationError.message}</p>
        )}
        </form>
    );
};

export default StudySessionForm;