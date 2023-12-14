import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';

export const salersApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        // Get All Salers
        getAllSalers: builder.query({
            query: () => `salers`,
        }),
        // Add New Saler
        addNewSaler: builder.mutation({
            query: (payload) => ({
                url: 'salers',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Post'],
        }),
        // Login
        loginSaler: builder.mutation({
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

export const { useGetAllSalersQuery, useAddNewSalerMutation, useLoginSalerMutation } = salersApi;

