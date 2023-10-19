import { configureStore } from '@reduxjs/toolkit' //'@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from '../redux/products/productApi'
import { usersApi } from '../redux/users/usersApi'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productsApi.middleware, usersApi.middleware]),
})

setupListeners(store.dispatch)