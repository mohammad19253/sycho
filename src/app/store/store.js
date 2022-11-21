import { configureStore } from '@reduxjs/toolkit'
import gameReducers from '../features/gameReducers' 
export const store = configureStore({
  reducer: {
    game:gameReducers,
  },
})