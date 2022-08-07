import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Main } from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn, {Login} from './pages/Login/SignIn'
import SignupCard  from './pages/sign up/Signup';
function App() {
  return (
    <ChakraProvider theme={theme}>
<Router>
      <Routes> 
      <Route path='/' exact element={ <Main/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignupCard/>} />

 
</Routes>
     
      </Router>

    </ChakraProvider>
  );
}

export default App;
