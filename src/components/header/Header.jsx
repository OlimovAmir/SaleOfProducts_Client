import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">My Company</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Analytics</Nav.Link>
                            <Nav.Link href="#pricing">Setting</Nav.Link>
                            <NavDropdown title="Documents" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Add a new CashExpense</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Add a new CashIncome</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Add a new employee</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Journal" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.5">Viewing an CashExpense's log</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Viewing an CashIncome's log</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">Viewing an employee's log</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.8"> Separated link </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header