import React from 'react'
import { Button, Stack ,Form } from 'react-bootstrap'
import FormContainer from '../component/FormContainer'

const EmailVerifyPage = () => {
    return (
        
            <Stack gap={2} direction="horizontal" className="col-md-5 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicVerifyCode">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Verify Code" />
                    </Form.Group>
                </Form>
                <Button>
                    Submit
                </Button>
            </Stack>
       
    )
}

export default EmailVerifyPage