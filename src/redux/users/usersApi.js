import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => `users`,
        }),
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
    }),
})

export const { useGetAllUsersQuery, useAddNewUserMutation } = usersApi;
