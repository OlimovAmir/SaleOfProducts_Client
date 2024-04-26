import React, { useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from 'react-bootstrap';
import styles from './RegistrationForm.module.css';
import videoSource from '../video/istockphoto.mp4'; // Импортируйте видеофайл


function RegistrationForm({ onRegistrationSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://localhost:7267/Auth/Token', null, {
                params: {
                    username: username,
                    password: password,
                },
            });

            const { accessToken, refreshToken } = response.data;

            console.log('Access Token:', accessToken);
            console.log('Refresh Token:', refreshToken);

            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            // Дополнительные действия с полученными токенами
            // Вызываем функцию onRegistrationSuccess сразу после получения токенов
            onRegistrationSuccess();
        } catch (error) {
            console.error('Failed to get tokens:', error);
            // Дополнительные действия при неудаче
        }
    };
    return (
        <div className={styles.videoBackground}>
            <video autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
            </video>
            <div >
                <div className='content'>
                    <Container className='mt-5'>
                        <Row>
                            <Col xs={6} md={4}>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label column sm="2">Username:</Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label column sm="2"> Password: </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                        </Col>
                                    </Form.Group>

                                    <Button type="submit">Log in</Button>
                                </Form>
                            </Col>
                        </Row>
                        { /* {accessToken && (
                        <div>
                            <p>Access Token: {accessToken}</p>
                            <p>Refresh Token: {refreshToken}</p>
                        </div>
                    )} */}
                    </Container>
                </div>

            </div>
        </div>


    )
}

export default RegistrationForm