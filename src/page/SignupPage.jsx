import React from 'react'
import { Form, Button , Stack} from 'react-bootstrap';
import FormContainer from '../component/FormContainer';

const SignupPage = () => {
    return (
        <FormContainer>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button
                        variant="primary"
                        type="submit"
                        className="col-md-12 text-center"
                    >
                        Submit
                    </Button>
                </Stack>
            </Form>
        </FormContainer>
    );
}

export default SignupPage