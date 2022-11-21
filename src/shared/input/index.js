import React, { useState } from 'react'
import PasswordIcon from '../../images/password.png'
import './index.css'
export const CsInput = ({ type='text',onChange,value='',placeholder='',className=''}) => {
    const [inputType,setInputType]=useState('password')
    if(type === 'text'){
       return <div className='cs-input-container'>
        <input 
        className={`html-input ${className}`}
            type={type}
            onChange={onChange}
            value={value} 
            placeholder={placeholder}
        />
        </div>
    }else if(type === 'password'){
        return  <div className='cs-input-container'>
            {
                inputType ==='password' ? <img src={PasswordIcon} 
                width={25}
                height={25}
                alt='password' 
                style={{margin:'10px'}}
                onClick={()=>{
                    setInputType('text')
                }}
               /> : <img src={PasswordIcon} 
               width={25}
               height={25}
               alt='password' 
               style={{margin:'10px'}}
               onClick={()=>{
                   setInputType('password')
               }}
              />
            }
            
        <input 
        className={`html-input ${className}`}
            type={inputType ==='password' ? 'password' : 'text'}
            onChange={onChange}
            value={value} 
            placeholder={placeholder}
        />
    </div>
    }else{
        return <div className='cs-input-container'>
        <input 
        className={`html-input ${className}`}
            type={type}
            onChange={onChange}
            value={value} 
            placeholder={placeholder}
        />
        </div>
    }
 
}
