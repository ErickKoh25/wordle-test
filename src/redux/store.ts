import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./actions/wordsSlice"

export const store = configureStore({
    reducer: {
        wordsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;