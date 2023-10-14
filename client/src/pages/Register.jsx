import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';

export default function Register() {
  return (
    <div>
      <Form>
        <Row style={{height: '100ch', justifyContent: 'center', paddingTop: '10%'}}>
          <Col xs={6}>
          <Stack gap={3}>
            <h2>Register</h2>
            <Form.Control type='text'  placeholder='Name'/>
            <Form.Control type='text'  placeholder='Email'/>
            <Form.Control type='text'  placeholder='Password'/>
            <Button variant='primary' type='submit'>Register</Button>
            <Alert variant='danger'><p>An error occured</p></Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
