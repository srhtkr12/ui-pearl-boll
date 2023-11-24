import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';

export const usersApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        // Get All Users
        getAllUsers: builder.query({
            query: () => `users`,
        }),
        // Add New User
        addNewUser: builder.mutation({
            query: (payload) => ({
                url: 'users',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Post'],
        }),
        // Login
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
    }),
});

export const { useGetAllUsersQuery, useAddNewUserMutation, useLoginUserMutation } = usersApi;

