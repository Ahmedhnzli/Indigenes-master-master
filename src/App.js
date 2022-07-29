import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Main } from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './pages/Login/Login'

function App() {
  return (
    <ChakraProvider theme={theme}>
<Router>
      <Routes> 

      <Route path='/' exact element={ <Main/>} />
      
      <Route path='/login' element={<Login />} />
       
 
</Routes>
     
      </Router>

    </ChakraProvider>
  );
}

export default App;
