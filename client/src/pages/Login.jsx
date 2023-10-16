import { useContext } from 'react';
import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const { loginUser, loginError, loginInfo, updateLoginInfo, loginLoading } = useContext(AuthContext);
  console.log(loginInfo)
  return (
    <div>
    <Form onSubmit={loginUser}>
      <Row style={{height: '100ch', justifyContent: 'center', paddingTop: '10%'}}>
        <Col xs={6}>
        <Stack gap={3}>
          <h2>Login</h2>
          <Form.Control type='text'  placeholder='Email' onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})}/>
          <Form.Control type='text'  placeholder='Password' onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}/>
          <Button variant='primary' type='submit'>{loginLoading ? 'Loading...' : 'Login'}</Button>
          {loginError?.error && <Alert variant='danger'><p>{loginError?.message}</p></Alert>}
          </Stack>
        </Col>
      </Row>
    </Form>
  </div>
  )
}
