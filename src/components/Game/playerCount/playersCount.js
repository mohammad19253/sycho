import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlayersCount } from '../../../app/features/gameReducers'
import { CsInput } from '../../../shared/input'
import './playercount.css'
export const PlayersCount = () => {
    const dispatch = useDispatch()
    const { playersCount } = useSelector(state=> state.game)
  return  <CsInput 
            className='h-100'
            type='number' 
            placeholder='5'
            value={playersCount}
            onChange={e=>{ dispatch( setPlayersCount(parseInt(e.target.value))) }}
        />

}
