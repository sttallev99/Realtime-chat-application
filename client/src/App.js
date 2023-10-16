import {Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Chat from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <Navigation />
    <Container className="">
      <Routes>
        <Route path='/' element={ user ? <Chat /> : <Login />}/>
        <Route path='/register' element={ user ? <Chat /> : <Register />} />
        <Route path='/login' element={ user ? <Chat/> : <Login />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
