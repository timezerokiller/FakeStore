import { configureStore } from "@reduxjs/toolkit"

import { shopSlice } from "./slice/shop"

export const store = configureStore({
    reducer: {
        shop: shopSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
