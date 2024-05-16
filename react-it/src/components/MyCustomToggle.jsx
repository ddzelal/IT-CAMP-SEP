import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

function MyCustomToggle(Props) {


// ZA DOMACI URADITI DA SE KLIKOM NA DUGME MENJA BOJA DUGMETA I DA SE MENJA TEKST NA DUGMETU
// TAKODJE URADITI DA SE MENJA TEKST U TYPOGRAPHY KOMPONENTI
// KORISTITI useState HOOK
// KORISTITI MATERIAL UI KOMPONENTE

  const {isActive,handleToggle} = Props;

  return (
    <Button onClick={()=> {handleToggle()}} color={isActive ? 'primary' : 'error'}    variant='contained'>
      {isActive ? 'ON' : 'OFF'}
    </Button>
  )
}

export default MyCustomToggle



