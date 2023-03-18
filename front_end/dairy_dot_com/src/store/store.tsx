import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import displayReducer from '../features/display/displaySlice'
import { reducersCool } from '../features/display/displaySlice'

export const store = configureStore({
   reducer: {
    counter: counterReducer,
      display: displayReducer,
     cool:reducersCool
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch