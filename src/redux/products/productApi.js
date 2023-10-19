import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosApi } from '../../helper/axios';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: axiosApi.local.defaults.baseURL }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
    }),
})

export const { useGetAllProductsQuery } = productsApi