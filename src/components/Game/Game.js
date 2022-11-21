import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Typography, Box, Tabs, Tab  } from '@mui/material';
import { v4 as uuId } from 'uuid'; 

import { PlayersCount } from './playerCount/playersCount'
import { setGameWords } from '../../app/features/gameReducers'
import { shuffleArray } from '../../functions.js'

import { Words } from './word-inputs/Words';
import { GridTable } from './grid-table/GridTable' 
 
import './game.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
export const Game = () => {
    const { psychoWord, othersWord, playersCount, gameWords } = useSelector(state=>state.game)
    const dispatch = useDispatch()
    const [loading,setLoading]=useState(false)
    const [tabs,setTabs] = useState(0);
 
    const generate=(psychoWord,otherWord,playersCount)=>{
        setLoading(true)
        let temp=[]
        if(playersCount !== 0 ){
           const gameWords = [...new Array(playersCount-1)].map((item) => {
                return  { value:otherWord, key:uuId() } 
           });
            temp = shuffleArray([ ...gameWords , { value:psychoWord,key:uuId() } ]) 
        }
        setTimeout(() => {   
            dispatch(setGameWords(temp))
            setLoading(false)
        }, 100);
    }
 
  return (
    <Container maxWidth='sm'  sx={{height:'100%'}} >
        <Box className='cu-box-black p-1' >
            <Box sx={{ 
                borderBottom: 1, 
                borderColor: 'divider',
                direction:'rtl',
             }}
            >
                <Tabs 
                     
                    value={tabs}
                     onChange={ (event, newValue) => {   setTabs(newValue)  }}
                >
                    <Tab label="اتوماتیک" sx={{color:'#7e7e7e'}} />
                    <Tab label="دستی" sx={{color:'#7e7e7e'}} />
                </Tabs>
            </Box>
            <Box>
                { 
                tabs === 0 ? '' 
                :
                tabs ===1 ?  <Words />
                : null
            }
            </Box>
        </Box>
        <Box className='cu-box-black p-2'  p='1' display='flex' justifyContent={'space-between'}>
             <Button size='12px' variant='contained'   onClick={()=>generate(psychoWord,othersWord,playersCount)} > 
                { loading ? 'پخش...': 'پخش کردن کلمات' }
            </Button >
            <PlayersCount />
            <Typography   
                    sx={{color:'white',m:1}} 
                    id="modal-modal-title"
                    variant="h6" 
                    component="h2" 
                    textAlign={'center'}>
                    :تعداد بازیکنان را وارد کنید
            </Typography>
        </Box> 
        <Box> <GridTable words={gameWords}/></Box>

    </Container >
  )
}
