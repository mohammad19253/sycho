import { configureStore } from "@reduxjs/toolkit";
import gameReducers from "../../features/Game/slice/gameReducers";
export const store = configureStore({
  reducer: {
    game: gameReducers,
  },
});
