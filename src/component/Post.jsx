import React from 'react';
import { useState } from 'react';
import { Card, Image, Dropdown, Stack } from 'react-bootstrap';
import { IconName ,FiUser } from "react-icons/fi"

const Post = ({ IconName, name, title, content ,tags}) => {
    const [posts,setPosts]=useState([])
    
    return (
        <Card className="mb-3">
            <Card.Header>
                <Stack direction="horizontal" gap={3}>
                    <FiUser />
                    <span>username</span>
                    <Dropdown className="d-inline mr-5 ms-auto" >
                        <Dropdown.Toggle id="dropdown-basic" variant="secondary" >
                            ...
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Edit">Edit</Dropdown.Item>
                            <Dropdown.Item href="/Delete">Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Stack>
            </Card.Header>
            <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>hello!! this is content</Card.Text>
            </Card.Body>
            <Card.Footer>TAG: </Card.Footer>
        </Card>
    );
};

export default Post;
