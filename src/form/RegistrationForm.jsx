import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './RegistrationForm.module.css';
import videoSource from '../video/istockphoto.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';


function RegistrationForm({ onRegistrationSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    useEffect(() => {
        // Проверяем наличие токенов в localStorage при загрузке компонента
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
            // Вызываем функцию onRegistrationSuccess сразу после установки токенов
            onRegistrationSuccess();
        }
    }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании компонента

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

            // Сохраняем токены в localStorage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

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
            <Navbar variant="dark" bg="dark" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#home">The program for warehouse accounting</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="Settings"
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                <div className={styles.content}>
                    
                    <Container className={styles.container}>
                        <Row>
                            <Col xs={6} md={12}>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className={styles.title} >Username:</Form.Label>
                                        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                        <Form.Label className={styles.title} > Password: </Form.Label>
                                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">Log in</Button>
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

export default RegistrationForm;
