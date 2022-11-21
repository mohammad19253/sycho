import React from 'react'
import './Words.css'
import { Box,Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setPsychoWord, setOthersWord } from '../../../app/features/gameReducers'
import { CsInput } from '../../../shared/input'
export const Words = () => {
  const { psychoWord, othersWord} = useSelector(state=>state.game)
  const dispatch=useDispatch()
  const psychoWordsHandler = (e)=>{ dispatch(setPsychoWord(e.target.value)) }
  const othersWordsHandler = (e)=>{ dispatch(setOthersWord(e.target.value)) }
  return (
    <Box sx={{margin:'.5rem'}} display='flex' justifyContent={'center'} alignItems='flex-end' flexDirection='column'>
      <Box   display='flex' justifyContent={'center'} alignItems='center' >
        <CsInput className='text-align-end' type='password' value={psychoWord} onChange={(e)=>{psychoWordsHandler(e)}}/>
        <Typography variant='h2' sx={{margin:'.5rem'}}>:کلمه سایکو</Typography>
      </Box>
      <Box   display='flex' justifyContent={'center'} alignItems='center' >
        <CsInput className='text-align-end' type='password' value={othersWord} onChange={(e)=>{othersWordsHandler(e)}}/>
        <Typography variant='h2' sx={{margin:'.5rem'}}>:کلمه دیگران</Typography>
      </Box>
    </Box>

    )
}
