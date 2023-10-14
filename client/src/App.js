import {Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Chat from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation />
    <Container className="">
      <Routes>
        <Route path='/' element={<Chat />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
