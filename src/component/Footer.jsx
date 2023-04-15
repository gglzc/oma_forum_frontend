import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row className='justify-content-md-center'>
                <Col md="auto">
                Copyright &copy;Oma Forum 
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer