'use client';

import React, { useState } from 'react';
import { gql, useQuery, useSuspenseQuery, useMutation } from '@apollo/client';


const StudySessionForm = () => {
    const [formData, setFormData] = useState({
        learningPath: '',
        durationMinutes: '',
        date: new Date().toISOString().split("T")[0], // format as YYYY-MM-DD for input[type="date"]
    });

    const GET_LEARNING_PATHS = gql`
        query GetLearningPaths {
            learningPaths {
                id
                title
            }
        }`;

    const ADD_STUDY_SESSION = gql`
        mutation AddStudySession($input: StudySessionInput!) {
            addStudySession(input: $input) {
            id
            durationMinutes
            date
            }
        }
        `;

    const { data, loading, error } = useQuery(GET_LEARNING_PATHS);
    const [addStudySession, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_STUDY_SESSION);


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
                date: new Date(formData.date),
                user: "6809bf5c395482877f920855", // ⬅️ Replace this with a real user ID or fetch it from auth later
              },
            },
          });
      
          alert("Study session logged!");
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
            type="date"
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
        {mutationLoading && <p>Logging session...</p>}
        {mutationError && <p className="text-red-500">Failed to log session.</p>}
        </form>
    );
};

export default StudySessionForm;