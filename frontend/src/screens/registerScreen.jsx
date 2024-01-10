import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/formContainer'

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDEefault()
        console.log('sub')
    }

    return (
        <FormContainer>
            <h1>Sing Up:</h1>

            <Form onSubmit={submitHandler} >
                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeHolder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeHolder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeHolder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                    Sing Up
                </Button>

                <Row className='py-3'>
                    <Col>
                        Already have an account ? <Link to='/login'>Register</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default RegisterScreen 