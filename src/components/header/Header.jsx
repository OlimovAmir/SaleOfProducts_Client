import React from 'react';
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/App.css';
import logo from '../../images/logo.jpg';
import { Route, Routes, BrowserRouter, Link, NavLink, Navigate } from 'react-router-dom';
import Home from './../../pages/Home';
import About from './../../pages/About';
import Contact from './../../pages/Contact';
import Blog from './../../pages/Blog';
import Documents from '../../pages/Documents';
import DocumentsUnits from '../../pages/DocumentsUnits';
import DocumentsEmployee from './../../pages/DocumentsEmployee';
import DocumentsSupplier from './../../pages/DocumentsSupplier.jsx';
import DocumentsProduct from '../../pages/DocumentsProduct';
import { useSelector, useDispatch } from 'react-redux';
import LanguageSelector from '../../utils/LanguageSelector.js';
import { logout } from '../../redux/reducers/authSlice.js';
import DocumentCustomer from '../../pages/customer/DocumentCustomer.jsx';
import DocumentCashIncome from './../../pages/cash/cashIncome/DocumentCashIncome';
import DocumentsStatics from '../../pages/statics/DocumentsStatics.jsx';

function Header() {
    const language = useSelector(state => state.language.value);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch(logout());
        window.location.reload();
    };

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
                                <Link to="/home" className="nav-link">{language === 'en' ? 'Home' : 'Главное'}</Link>
                                <Link to="/about" className="nav-link">{language === 'en' ? 'About us' : 'О нас'}</Link>
                                <Link to="/documents" className="nav-link">{language === 'en' ? 'Journal' : 'Журналы'}</Link>
                                <Link to="/blog" className="nav-link">{language === 'en' ? 'Reports' : 'Отчеты'}</Link>
                                <Link to="/documentStatics" className="nav-link">{language === 'en' ? 'Statistics' : 'Статистика'}</Link>
                                <NavDropdown title={<span>{language === 'en' ? 'Documents' : 'Документы'}</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/documentEmployee">{language === 'en' ? 'Employee' : 'Сотрудники'}</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/documentProduct">{language === 'en' ? 'Product' : 'Товар'}</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/documentsUnits">{language === 'en' ? 'Unit' : 'Ед. изм.'}</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/documentSupplier">{language === 'en' ? 'Supplier' : 'Поставщик'}</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="documentCustomer">{language === 'en' ? 'Customer' : 'Покупатель'}</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/documentCash">{language === 'en' ? 'Cash' : 'Касса'}</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">{language === 'en' ? 'Setting' : 'Настройка'}</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Form inline="true">
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className="mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    {language === 'en' ? (
                                        <div>
                                            <Button type="submit">Submit</Button>
                                            <NavDropdown.Item href="#action/3.4">Setting</NavDropdown.Item>
                                        </div>
                                    ) : (
                                        <div>
                                            <Button type="submit">Отправить</Button>
                                            <NavDropdown.Item href="#action/3.4">Настройки</NavDropdown.Item>
                                        </div>
                                    )}
                                </Col>
                                <Col xs="auto">
                                    <LanguageSelector />
                                </Col>
                                <Col xs="auto">
                                    <Button variant="danger" onClick={handleLogout}>Log out</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/documentEmployee" element={<DocumentsEmployee />} />
                    <Route path="/documentsUnits" element={<DocumentsUnits />} />
                    <Route path="/documentProduct" element={<DocumentsProduct />} />
                    <Route path="/documentSupplier" element={<DocumentsSupplier />} />
                    <Route path="/documentCustomer" element={<DocumentCustomer />} />
                    <Route path="/documentCash" element={<DocumentCashIncome />} />
                    <Route path="/documentStatics" element={<DocumentsStatics />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Header;
