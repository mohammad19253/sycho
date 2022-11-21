 import { createTheme } from '@mui/material/styles';
 
 const gray ='#C8C7C7'
 const theme = createTheme({
    typography:{
         fontFamily:'IRANSans',
            
         h1:{
            fontSize:'20px',
            color:'white',
            lineHeight:'normal',
         },
         h2:{
            fontSize:'16px',
            color:gray,
            lineHeight:'normal',
         },
         h3:{
            fontSize:'12px',
            color:gray,
            lineHeight:'normal',
         }
    }, 
  });
export { theme }
 
