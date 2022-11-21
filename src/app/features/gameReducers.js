//gameReducers.js
import { createSlice } from '@reduxjs/toolkit'
import { GAME_TYPES } from '../../components/Game/constant/gameTypes'
const initialState = {
  words: [],
  psychoWord: '',
  othersWord:'',
  playersCount: 0,
  type:GAME_TYPES.AUTO_WORDS_SELECT
}

export const gameReducers = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameWords: (state, action) => {
      state.words  = action.payload
    },
    setPsychoWord: (state, action) => {
      state.psychoWord  = action.payload
    },
    setOthersWord: (state, action) => {
        state.othersWord  = action.payload
    },
    setPlayersCount: (state, action) => {
      state.playersCount  = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGameWords, setPsychoWord, setOthersWord, setPlayersCount } = gameReducers.actions

export default gameReducers.reducer