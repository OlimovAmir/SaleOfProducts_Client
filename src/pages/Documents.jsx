import React from 'react'
import { Col, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

import fotoDisigner3 from '../images/3.jpg';
import fotoDisigner5 from '../images/5.jpg';
import CashExpense from './CashExpense';
import FormUnit from '../form/FormUnit';

function Documents() {
    return (
        <>
            <TabContainer id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={2}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <NavItem>
                                <Nav.Link eventKey='first' className="nav-link" style={{ textAlign: 'left' }}>
                                    Add Employee
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='unit' className="nav-link" style={{ textAlign: 'left' }}>
                                    Add Unit
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='third' className="nav-link" style={{ textAlign: 'left' }}>
                                    Add Store
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='fourth' className="nav-link" style={{ textAlign: 'left' }}>
                                    Add CashExpense
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='fifth' className="nav-link" style={{ textAlign: 'left' }}>
                                    Add CashIncome
                                </Nav.Link>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <TabContent>
                            <TabPane eventKey='first'>
                                
                            </TabPane>
                            <TabPane eventKey='unit'>
                                <FormUnit/>
                            </TabPane>
                            <TabPane eventKey='third'>
                                <img
                                    src={fotoDisigner3}
                                    className='img-fluid'
                                    alt='fotoDisigner'
                                />
                            </TabPane>
                            <TabPane eventKey='fourth'>
                                <CashExpense />
                            </TabPane>
                            <TabPane eventKey='fifth'>
                                <img
                                    src={fotoDisigner5}
                                    className='img-fluid'
                                    alt='fotoDisigner'
                                />
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </>
    );
}

export default Documents