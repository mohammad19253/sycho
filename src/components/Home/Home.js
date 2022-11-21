import { Box, Typography, Button, Container, } from '@mui/material'
import './home.css'
import React from 'react'

export const Home = () => {
  return (
    <div className='home-container'>
        <Container  maxWidth="sm"  >
            <Typography variant='h1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </Typography>
            <Typography  sx={{m:2}}  variant='h3' component={'h2'} >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای 
            </Typography>
        </Container>
        <Button variant='contained'>   شروع بازی  </Button>
    </div>
  )
}
