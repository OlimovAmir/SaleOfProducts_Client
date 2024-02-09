import React from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/App.css';
import logo from '../../images/logo.jpg';
import { Route, Routes, BrowserRouter, Link, Navigate } from 'react-router-dom';
import Home from './../../pages/Home';
import About from './../../pages/About';
import Contact from './../../pages/Contact';
import Blog from './../../pages/Blog';
import Documents from '../../pages/Documents';


function Header() {
    return (
        <BrowserRouter>
            <div>
                <Navbar expand="lg" className="bg-dark" variant='dark'>
                    <Container>

                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                height="50"
                                width="50"
                                alt='Logo'
                                style={{ borderRadius: '30%' }}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/home" className="nav-link">Home</Link>
                                <Link to="/about" className="nav-link">About as</Link>
                                <Link to="/documents" className="nav-link">Documents</Link>
                                <Link to="/contact" className="nav-link">Contact</Link>
                                <Link to="/blog" className="nav-link">Blog</Link>
                                <Nav.Link href="#link" >Link</Nav.Link>
                                <NavDropdown title={<span >Dropdown</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Navbar>

                <Routes default>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>



            </div>
        </BrowserRouter>
    )
}

export default Header