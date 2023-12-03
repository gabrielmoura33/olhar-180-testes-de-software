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

export type CreateTaskInput = {
  date: Scalars['DateTime'];
  description: Scalars['String'];
  priority: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  deactivateTask: Scalars['Boolean'];
  deleteTask: Scalars['Boolean'];
  updateTask: Task;
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};


export type MutationDeactivateTaskArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['String'];
};


export type MutationUpdateTaskArgs = {
  id: Scalars['String'];
  updateTaskInput: UpdateTaskInput;
};

export type Query = {
  __typename?: 'Query';
  getActiveTasks: Array<Task>;
  getTaskById?: Maybe<Task>;
  me: User;
};


export type QueryGetTaskByIdArgs = {
  id: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  User: User;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  priority: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type UpdateTaskInput = {
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  priority: Scalars['String'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  authUserId: Scalars['String'];
  id: Scalars['ID'];
};

export type CreateTaskMutationVariables = Exact<{
  createTaskInput: CreateTaskInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: string, title: string, description: string, date: any, priority: string, userId: string, isActive: boolean } };

export type DeactivateTaskMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeactivateTaskMutation = { __typename?: 'Mutation', deactivateTask: boolean };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: boolean };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['String'];
  updateTaskInput: UpdateTaskInput;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'Task', id: string, title: string, description: string, date: any, priority: string, userId: string, isActive: boolean } };

export type GetAllActiveTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllActiveTasksQuery = { __typename?: 'Query', getActiveTasks: Array<{ __typename?: 'Task', id: string, title: string, description: string, date: any, priority: string, isActive: boolean }> };

export type GetTaskByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTaskByIdQuery = { __typename?: 'Query', getTaskById?: { __typename?: 'Task', id: string, title: string, description: string, date: any, priority: string, userId: string, isActive: boolean } | null };


export const CreateTaskDocument = gql`
    mutation CreateTask($createTaskInput: CreateTaskInput!) {
  createTask(createTaskInput: $createTaskInput) {
    id
    title
    description
    date
    priority
    userId
    isActive
  }
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      createTaskInput: // value for 'createTaskInput'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeactivateTaskDocument = gql`
    mutation DeactivateTask($id: String!) {
  deactivateTask(id: $id)
}
    `;
export type DeactivateTaskMutationFn = Apollo.MutationFunction<DeactivateTaskMutation, DeactivateTaskMutationVariables>;

/**
 * __useDeactivateTaskMutation__
 *
 * To run a mutation, you first call `useDeactivateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateTaskMutation, { data, loading, error }] = useDeactivateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeactivateTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeactivateTaskMutation, DeactivateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeactivateTaskMutation, DeactivateTaskMutationVariables>(DeactivateTaskDocument, options);
      }
export type DeactivateTaskMutationHookResult = ReturnType<typeof useDeactivateTaskMutation>;
export type DeactivateTaskMutationResult = Apollo.MutationResult<DeactivateTaskMutation>;
export type DeactivateTaskMutationOptions = Apollo.BaseMutationOptions<DeactivateTaskMutation, DeactivateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: String!) {
  deleteTask(id: $id)
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($id: String!, $updateTaskInput: UpdateTaskInput!) {
  updateTask(id: $id, updateTaskInput: $updateTaskInput) {
    id
    title
    description
    date
    priority
    userId
    isActive
  }
}
    `;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateTaskInput: // value for 'updateTaskInput'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const GetAllActiveTasksDocument = gql`
    query GetAllActiveTasks {
  getActiveTasks {
    id
    title
    description
    date
    priority
    isActive
  }
}
    `;

/**
 * __useGetAllActiveTasksQuery__
 *
 * To run a query within a React component, call `useGetAllActiveTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllActiveTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllActiveTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllActiveTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllActiveTasksQuery, GetAllActiveTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllActiveTasksQuery, GetAllActiveTasksQueryVariables>(GetAllActiveTasksDocument, options);
      }
export function useGetAllActiveTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllActiveTasksQuery, GetAllActiveTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllActiveTasksQuery, GetAllActiveTasksQueryVariables>(GetAllActiveTasksDocument, options);
        }
export type GetAllActiveTasksQueryHookResult = ReturnType<typeof useGetAllActiveTasksQuery>;
export type GetAllActiveTasksLazyQueryHookResult = ReturnType<typeof useGetAllActiveTasksLazyQuery>;
export type GetAllActiveTasksQueryResult = Apollo.QueryResult<GetAllActiveTasksQuery, GetAllActiveTasksQueryVariables>;
export const GetTaskByIdDocument = gql`
    query GetTaskById($id: String!) {
  getTaskById(id: $id) {
    id
    title
    description
    date
    priority
    userId
    isActive
  }
}
    `;

/**
 * __useGetTaskByIdQuery__
 *
 * To run a query within a React component, call `useGetTaskByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaskByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTaskByIdQuery, GetTaskByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(GetTaskByIdDocument, options);
      }
export function useGetTaskByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskByIdQuery, GetTaskByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(GetTaskByIdDocument, options);
        }
export type GetTaskByIdQueryHookResult = ReturnType<typeof useGetTaskByIdQuery>;
export type GetTaskByIdLazyQueryHookResult = ReturnType<typeof useGetTaskByIdLazyQuery>;
export type GetTaskByIdQueryResult = Apollo.QueryResult<GetTaskByIdQuery, GetTaskByIdQueryVariables>;