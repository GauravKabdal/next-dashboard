import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './boardSlice/boardSlice'
  import subtaskReducer from './taskSlice/subtaskSlice'
export const makeStore = () => {
  return configureStore({
    reducer: { board : boardReducer }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']