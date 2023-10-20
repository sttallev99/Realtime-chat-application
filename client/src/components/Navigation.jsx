import { useContext } from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import Notification from './chats/Notification';

export default function Navigation() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <Navbar bg='dark' className='mb-4' style={{ height: '3.75rem'}}>
      <Container>
        <Link to='/' className='link-light text-decoration-none'><h2>ChatApp</h2></Link>
        {user && <span className='text-warning'>Logged in as {user?.name}</span>}
        <Nav>
            <Stack direction='horizontal' gap={3}>
              {
                user
                ? (
                  <>
                    <Notification />
                    <Link to='logout' onClick={logoutUser} className='link-light text-decoration-none'>Logout</Link>
                  </>
                ) 
                : (
                  <>
                    <Link to='/login' className='link-light text-decoration-none'>Login</Link>
                    <Link to='/register' className='link-light text-decoration-none'>Register</Link>
                  </>
                )
              }
            </Stack>
        </Nav>
      </Container>
    </Navbar>
  )
}
