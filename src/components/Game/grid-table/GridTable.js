import React, { useState, } from 'react'
import { Grid, Button, Modal, Typography, Box, Container} from '@mui/material'
import { setGameWords } from '../../../app/features/gameReducers';
import { useDispatch, useSelector } from 'react-redux';
export const GridTable = ({visible}) => {
    const dispatch=useDispatch()
    const [open, setOpen] =  useState(false);
    const {words} = useSelector(state=>state.game)
    const [selectedCard,setSelectedCard]=useState(null)
    const handleOpen = (item) => {
        setSelectedCard(item)
        setOpen(true);
    }
    const handleClose = (card) => {
        dispatch(setGameWords(words.filter(item=>{return item.key !== card.key})))
        setOpen(false);
    }  
  return (
    <Box   minHeight='419px' className='cu-box-black p-1'>  
        {  true ?  
            <Grid
                sx={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start'}}
                container  
            >
            {  words.map((item)=>{
                    return <Grid item  xs={3} 
                    sx={{display:'flex',justifyContent:'center',alignItems:'center',my:'.5rem'}}
                    > 
                         <Button 
                            sx={{ width:'90%',backgroundColor:'#717171',minHeight:'4rem'}}
                            variant='contained' 
                            key={item.key} 
                            // onClick={()=>{removeWord(item.key)}}
                            onClick={e=>{handleOpen(item)}}
                            >   
                        </Button>
                    </Grid>
                })
            }
        </Grid> : ''
        }
        {
            words.length === 0 ? <Box>
                <Typography></Typography>
            </Box> : ''
        }
       <Modal
            open={open}
            onClose={e=>{handleClose(selectedCard)}}
            className='modal-container'
        >
            <Box 
            sx={{  maxWidth:{ md: 450, xs: '100%' }, minWidth:{ md: 450, xs: '100%' } }}  className='modal-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={'center'}>
                    کلمه شما
                </Typography>
                <Typography 
                    variant="h1" 
                    component="h1" 
                    fontSize='28px'
                    textAlign={'center'}>
                    { selectedCard?.value}
                </Typography>
                <Button 
                        sx={{width:'100%'}}
                        variant='contained' 
                        onClick={e=>{handleClose(selectedCard)}}
                    >  
                        <Typography   variant="h6" component="h6" textAlign={'center'}     fontSize='16px'>
                            فهمیدم
                        </Typography> 
                </Button>
            </Box>
        </Modal> 
    </Box>
  )
}
