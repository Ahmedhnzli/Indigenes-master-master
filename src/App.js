import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Main } from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Login/SignIn';
import SignupCard from './pages/sign up/Signup';
import PageProjects from './pages/pageProjects';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/projects/:id" element={<PageProjects />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
