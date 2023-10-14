import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';

export default function Login() {
  return (
    <div>
    <Form>
      <Row style={{height: '100ch', justifyContent: 'center', paddingTop: '10%'}}>
        <Col xs={6}>
        <Stack gap={3}>
          <h2>Login</h2>
          <Form.Control type='text'  placeholder='Email'/>
          <Form.Control type='text'  placeholder='Password'/>
          <Button variant='primary' type='submit'>Login</Button>
          <Alert variant='danger'><p>An error occured</p></Alert>
          </Stack>
        </Col>
      </Row>
    </Form>
  </div>
  )
}
