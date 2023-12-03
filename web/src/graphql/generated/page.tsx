import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../../lib/withApollo';




export async function getServerPageGetAllActiveTasks
    (options: Omit<Apollo.QueryOptions<Types.GetAllActiveTasksQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetAllActiveTasksQuery>({ ...options, query: Operations.GetAllActiveTasksDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetAllActiveTasks = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAllActiveTasksQuery, Types.GetAllActiveTasksQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAllActiveTasksDocument, options);
};
export type PageGetAllActiveTasksComp = React.FC<{data?: Types.GetAllActiveTasksQuery, error?: Apollo.ApolloError}>;
export const withPageGetAllActiveTasks = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAllActiveTasksQuery, Types.GetAllActiveTasksQueryVariables>) => (WrappedComponent:PageGetAllActiveTasksComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetAllActiveTasksDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetAllActiveTasks = {
      getServerPage: getServerPageGetAllActiveTasks,
      withPage: withPageGetAllActiveTasks,
      usePage: useGetAllActiveTasks,
    }
export async function getServerPageGetTaskById
    (options: Omit<Apollo.QueryOptions<Types.GetTaskByIdQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetTaskByIdQuery>({ ...options, query: Operations.GetTaskByIdDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetTaskById = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTaskByIdQuery, Types.GetTaskByIdQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetTaskByIdDocument, options);
};
export type PageGetTaskByIdComp = React.FC<{data?: Types.GetTaskByIdQuery, error?: Apollo.ApolloError}>;
export const withPageGetTaskById = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetTaskByIdQuery, Types.GetTaskByIdQueryVariables>) => (WrappedComponent:PageGetTaskByIdComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetTaskByIdDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetTaskById = {
      getServerPage: getServerPageGetTaskById,
      withPage: withPageGetTaskById,
      usePage: useGetTaskById,
    }