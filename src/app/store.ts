import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../features/app-store/appSlice'
import popUpReducer from '../features/pop-up/popUpSlice'


export const store = configureStore({
    reducer:{
        appState: appReducer,
        popUp: popUpReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch