import { Grid, Box, Container, Button, Modal, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Sycho.css'
export const Sycho = () => {
    const [open, setOpen] =  useState(false);

    const [selectedCard,setSelectedCard]=useState(null)
    const handleOpen = (item) => {
        setSelectedCard(item)
        setOpen(true);
    }
    const handleClose = (card) => {
        setGameWords(gameWords.filter(item=>{return item.key !== card.key}))
        setOpen(false);
    }

    const [list,setList]=useState([1,2,3,4])
   
    
    const [gameWords,setGameWords]=useState([])
    const [playersNumber,setPlayerNumber]=useState(5)
 
    let shuffleArray = (array)=>{
        const sh=array
        sh.sort(function () {
            return Math.random() - 0.5; });
        return sh
         
    }

    
    const generat=()=>{
        const words= list
        const sychoWord= words[Math.floor(Math.random()*words.length)];
     

        const otherWords= words.filter(item=>{   return  item !== sychoWord    });
        const sample_word= otherWords[Math.floor(Math.random()*otherWords.length)]; 
     
        const gameWords = [...new Array(playersNumber-1)].map((item) => {
             return  { value:sample_word,   key:uuidv4() } 
    });
        const temp = shuffleArray([...gameWords , { value:sychoWord,key:uuidv4() } ]) 
        setGameWords( temp)
    }
    
    
    return (
    <Container sx={{p:5}}>
        <Typography   
            sx={{color:'white'}} 
            id="modal-modal-title"
            variant="h6" 
            component="h2" 
            textAlign={'center'}>
                    تعداد بازیکنان را وارد کنید
        </Typography>
        <input 
            className='primary-input'
            type='number' 
            placeholder='5'
            onChange={e=>{setPlayerNumber(parseInt(e.target.value))}}
        />
        <br/>
        <br/>
        <button  
            className='primary-btn'
            onClick={generat} > 
            پخش کردن کلمات</button >
        <br/> 
        <Modal
            open={open}
            onClose={e=>{handleClose(selectedCard)}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='modal-container'
        >
        <Box  className='modal-box'>
                <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={'center'}>
                    کلمه شما
                </Typography>
                <Typography 
                    id="modal-modal-title"
                    variant="h1" 
                    component="h2" 
                textAlign={'center'}>
                    { selectedCard?.value}
                </Typography>
                <br/>
                <Button 
                    sx={{width:'100%',backgroundColor:'transparent',border:'1px solid white',borderRadius:'1rem'}}
                    variant='contained' 
                    onClick={e=>{handleClose(selectedCard)}}
                >  
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={'center'}>
                        اوکی
                    </Typography> 
            </Button>
        </Box>
        </Modal>
        {
            gameWords.length !== 0 ?
            <><Typography   
            sx={{color:'white',m:3}} 
            id="modal-modal-title"
            variant="h6" 
            component="h2" 
            textAlign={'center'}  > ... برای دریافت کلمه یک دکمه را انتخاب کنید  ...</Typography>
             <Grid container >
            {  gameWords.map((item)=>{
                    return <Grid xs={3}> 
                         <Button 
                            sx={{m:2,width:'70%',backgroundColor:'#717171'}}
                            variant='contained' 
                          
                            key={item.key} 
                            className='card'
                            // onClick={()=>{removeWord(item.key)}}
                            onClick={e=>{handleOpen(item)}}
                            >  
                              
                        </Button>
                    </Grid>
                })
            }
        </Grid>
        </>:''
        }
       

    </Container>
  )
}
