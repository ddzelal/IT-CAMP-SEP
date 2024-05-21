import {  Button } from '@mui/material'
import React, { useState } from 'react'
import { randomColor } from '../utils';
import { arrColor2 } from '../constants';

function MyCustomToggle(Props) {


  // ZA DOMACI URADITI DA NE MOZE DA SE PONOVI TRENTNA I PRETHODNA BOJA
  const {isActive,handleToggle} = Props;

  const [currentColor, setCurrentColor] = useState('primary')

  const handleRandomColor = () => {
    setCurrentColor(randomColor(arrColor2,currentColor))
  }



  return (
    <Button onClick={()=> {handleRandomColor()}} color={currentColor}    variant='contained'>
      {isActive ? 'ON' : 'OFF'}
    </Button>
  )
}

export default MyCustomToggle



