import React from 'react'
import { Col, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

import fotoDisigner3 from '../images/3.jpg';
import fotoDisigner5 from '../images/5.jpg';
import CashExpense from './CashExpense';
import FormUnit from '../form/FormUnit';

function DocumentsUnits() {
    return (
        <>
            <TabContainer id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={2}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <NavItem>
                                <Nav.Link eventKey='first' className="nav-link" style={{ textAlign: 'left' }}>
                                    Create Unit
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='unit' className="nav-link" style={{ textAlign: 'left' }}>
                                    Update Unit
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='third' className="nav-link" style={{ textAlign: 'left' }}>
                                    Delete Unit
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='fourth' className="nav-link" style={{ textAlign: 'left' }}>
                                    Get All List Units
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='fifth' className="nav-link" style={{ textAlign: 'left' }}>
                                    Setting
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

export default DocumentsUnits