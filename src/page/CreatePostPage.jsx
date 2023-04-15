import React from 'react'
import FormContainer from '../component/FormContainer'
import { FloatingLabel, Form, Stack, Button, Placeholder } from 'react-bootstrap'
import { useState } from 'react'
import TagInput from '../component/TagInputComponent'

const CreatePostPage = () => {
    const [selectedValues, setSelectedValues] = useState([]);

    return (
        <FormContainer>
            <Form>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Title"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Content"
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '300px' }}
                    />
                </FloatingLabel>

                <Form.Label>Select  tags:</Form.Label>
                <TagInput />
                
                <Placeholder size="xs"/>

                <Stack gap={2} className="col-md-6 mx-auto">
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
    )
}

export default CreatePostPage