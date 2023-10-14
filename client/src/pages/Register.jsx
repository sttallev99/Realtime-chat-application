import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Register() {
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);  
  return (
    <div>
      <Form>
        <Row style={{height: '100ch', justifyContent: 'center', paddingTop: '10%'}}>
          <Col xs={6}>
          <Stack gap={3}>
            <h2>Register</h2>
            <Form.Control type='text'  placeholder='Name' onChange={(e) => updateRegisterInfo({...registerInfo, name: e.target.value})}/>
            <Form.Control type='text'  placeholder='Email' onChange={(e) => updateRegisterInfo({...registerInfo, email: e.target.value})}/>
            <Form.Control type='text'  placeholder='Password' onChange={(e) => updateRegisterInfo({...registerInfo, password: e.target.value})}/>
            <Button variant='primary' type='submit'>Register</Button>
            <Alert variant='danger'><p>An error occured</p></Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
