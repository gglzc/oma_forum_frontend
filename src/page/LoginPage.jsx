import React, { useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap';
import FormContainer from '../component/FormContainer';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler =() =>{
        fetch("http://localhost:8888/api/user/login")
    }

    return (
        <FormContainer>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <a href='/signup'>No Account？</a>

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

export default LoginPage