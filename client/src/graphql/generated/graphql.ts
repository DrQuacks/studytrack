import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type LearningPath = {
  __typename?: 'LearningPath';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  owner: Scalars['ID'];
  resources?: Maybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addStudySession: StudySession;
};


export type MutationAddStudySessionArgs = {
  input: StudySessionInput;
};

export type Query = {
  __typename?: 'Query';
  learningPaths: Array<LearningPath>;
  studySessions: Array<StudySession>;
};

export type StudySession = {
  __typename?: 'StudySession';
  date: Scalars['DateTime'];
  durationMinutes: Scalars['Int'];
  id: Scalars['ID'];
  learningPath: Scalars['ID'];
  user: Scalars['ID'];
};

export type StudySessionInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  durationMinutes: Scalars['Int'];
  learningPath: Scalars['ID'];
  user: Scalars['ID'];
};

export type AddStudySessionMutationVariables = Exact<{
  input: StudySessionInput;
}>;


export type AddStudySessionMutation = { __typename?: 'Mutation', addStudySession: { __typename?: 'StudySession', id: string, date: any, durationMinutes: number, learningPath: string, user: string } };

export type GetLearningPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLearningPathsQuery = { __typename?: 'Query', learningPaths: Array<{ __typename?: 'LearningPath', id: string, title: string }> };

export type GetStudySessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudySessionsQuery = { __typename?: 'Query', studySessions: Array<{ __typename?: 'StudySession', id: string, durationMinutes: number, date: any, learningPath: string, user: string }> };


export const AddStudySessionDocument = gql`
    mutation AddStudySession($input: StudySessionInput!) {
  addStudySession(input: $input) {
    id
    date
    durationMinutes
    learningPath
    user
  }
}
    `;
export type AddStudySessionMutationFn = Apollo.MutationFunction<AddStudySessionMutation, AddStudySessionMutationVariables>;

/**
 * __useAddStudySessionMutation__
 *
 * To run a mutation, you first call `useAddStudySessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStudySessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStudySessionMutation, { data, loading, error }] = useAddStudySessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddStudySessionMutation(baseOptions?: Apollo.MutationHookOptions<AddStudySessionMutation, AddStudySessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStudySessionMutation, AddStudySessionMutationVariables>(AddStudySessionDocument, options);
      }
export type AddStudySessionMutationHookResult = ReturnType<typeof useAddStudySessionMutation>;
export type AddStudySessionMutationResult = Apollo.MutationResult<AddStudySessionMutation>;
export type AddStudySessionMutationOptions = Apollo.BaseMutationOptions<AddStudySessionMutation, AddStudySessionMutationVariables>;
export const GetLearningPathsDocument = gql`
    query GetLearningPaths {
  learningPaths {
    id
    title
  }
}
    `;

/**
 * __useGetLearningPathsQuery__
 *
 * To run a query within a React component, call `useGetLearningPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLearningPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLearningPathsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLearningPathsQuery(baseOptions?: Apollo.QueryHookOptions<GetLearningPathsQuery, GetLearningPathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLearningPathsQuery, GetLearningPathsQueryVariables>(GetLearningPathsDocument, options);
      }
export function useGetLearningPathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLearningPathsQuery, GetLearningPathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLearningPathsQuery, GetLearningPathsQueryVariables>(GetLearningPathsDocument, options);
        }
export type GetLearningPathsQueryHookResult = ReturnType<typeof useGetLearningPathsQuery>;
export type GetLearningPathsLazyQueryHookResult = ReturnType<typeof useGetLearningPathsLazyQuery>;
export type GetLearningPathsQueryResult = Apollo.QueryResult<GetLearningPathsQuery, GetLearningPathsQueryVariables>;
export const GetStudySessionsDocument = gql`
    query GetStudySessions {
  studySessions {
    id
    durationMinutes
    date
    learningPath
    user
  }
}
    `;

/**
 * __useGetStudySessionsQuery__
 *
 * To run a query within a React component, call `useGetStudySessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudySessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudySessionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudySessionsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudySessionsQuery, GetStudySessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudySessionsQuery, GetStudySessionsQueryVariables>(GetStudySessionsDocument, options);
      }
export function useGetStudySessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudySessionsQuery, GetStudySessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudySessionsQuery, GetStudySessionsQueryVariables>(GetStudySessionsDocument, options);
        }
export type GetStudySessionsQueryHookResult = ReturnType<typeof useGetStudySessionsQuery>;
export type GetStudySessionsLazyQueryHookResult = ReturnType<typeof useGetStudySessionsLazyQuery>;
export type GetStudySessionsQueryResult = Apollo.QueryResult<GetStudySessionsQuery, GetStudySessionsQueryVariables>;