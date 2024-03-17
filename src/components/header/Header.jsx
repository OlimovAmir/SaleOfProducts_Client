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
import DocumentsUnits from '../../pages/DocumentsUnits';
import DocumentsEmployee from './../../pages/DocumentsEmployee';
import DocumentsProduct from '../../pages/DocumentsProduct';


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
                                <Link to="/documents" className="nav-link">Journal</Link>
                                <Link to="/contact" className="nav-link">Contact</Link>
                                <Link to="/blog" className="nav-link">Reports</Link>
                                <Nav.Link href="#link" >Statistics</Nav.Link>
                                <NavDropdown title={<span >Documents</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/documentEmployee" >Employee</NavDropdown.Item>
                                    <NavDropdown.Item href="/documentProduct" >Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/documentsUnits">Unit</NavDropdown.Item>
                                    <NavDropdown.Item href="/documentSupplier" >Supplier</NavDropdown.Item>
                                    <NavDropdown.Item href="/documentCustomer" >Customer</NavDropdown.Item>
                                    <NavDropdown.Item href="/documentCash" >Cash</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Setting</NavDropdown.Item>
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
                                <Col xs="auto">
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">En</option>
                                        <option value="2">Ru</option>
                                    </Form.Select>
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
                    <Route path="/documentEmployee" element={<DocumentsEmployee />} />
                    <Route path="/documentsUnits" element={<DocumentsUnits />} />
                    <Route path="/documentProduct" element={<DocumentsProduct />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>



            </div>
        </BrowserRouter>
    )
}

export default Header