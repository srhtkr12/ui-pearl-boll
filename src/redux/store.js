import { configureStore } from '@reduxjs/toolkit' //'@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from '../redux/users/usersApi'
import { salersApi } from '../redux/salers/salersApi'
import { productsApi } from '../redux/products/productApi'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [salersApi.reducerPath]: salersApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productsApi.middleware, usersApi.middleware]),
})

setupListeners(store.dispatch)