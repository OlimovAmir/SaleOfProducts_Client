import React from 'react'
import { Col, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'


import FormUnit from '../form/FormUnit';
import FormEmployee from '../form/FormEmployee';
import FormGetAllEmployee from '../form/FormGetAllEmployee';

function DocumentsEmployee() {
    return (
        <>
            <TabContainer id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={2}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <NavItem>
                                <Nav.Link eventKey='first' className="nav-link" style={{ textAlign: 'left' }}>
                                To hire
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='update' className="nav-link" style={{ textAlign: 'left' }}>
                                    Update Employee
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='delete' className="nav-link" style={{ textAlign: 'left' }}>
                                Dismissal of an employee
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='getAll' className="nav-link" style={{ textAlign: 'left' }}>
                                    Get All List Employee
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='setting' className="nav-link" style={{ textAlign: 'left' }}>
                                    Setting
                                </Nav.Link>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <TabContent>
                            <TabPane eventKey='first'>
                                <FormEmployee/>
                            </TabPane>
                            <TabPane eventKey='update'>
                                <FormUnit/>
                            </TabPane>
                            <TabPane eventKey='delete'>
                                
                            </TabPane>
                            <TabPane eventKey='getAll'>
                                <FormGetAllEmployee/>
                            </TabPane>
                            <TabPane eventKey='setting'>
                                
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </>
    );
}

export default DocumentsEmployee