import React, { useState } from 'react'
import Button from '@mui/material/Button';
import MyCustomToggle from './components/MyCustomToggle.jsx';
import { Box, Typography } from '@mui/material';

 const App = () => {

  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }


  return (
   <Box>
        <MyCustomToggle handleToggle={handleToggle} isActive={isActive}/>
        <Typography>Jesam li ja aktivan ?{isActive ?  'Active' : 'NxotActive'}</Typography>
    </Box>
  )
}


export default App
