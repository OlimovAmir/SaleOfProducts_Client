import React from 'react';
import { Col, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import GetAllSupplier from './supplier/GetAllSupplier';
import AddSupplierForm from '../form/AddSupplierForm';



function DocumentsProduct() {
    const language = useSelector(state => state.language.value);
    return (
        <>
            <TabContainer id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={2}>
                        <Nav variant='pills' className='flex-column mt-2'>                            
                            <NavItem>
                                <Nav.Link eventKey='getAll' className="nav-link" style={{ textAlign: 'left' }}>
                                    {language === 'en' ? 'Get All Supplier' : 'Список всех поставщиков'}
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='setting' className="nav-link" style={{ textAlign: 'left' }}>
                                    {language === 'en' ? 'Setting' : 'Настройка'}
                                </Nav.Link>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <TabContent>
                            <TabPane eventKey='first'>

                            </TabPane>
                            <TabPane eventKey='getAll'>
                                <GetAllSupplier/>
                            </TabPane>
                            <TabPane eventKey='setting'>
                                <AddSupplierForm/>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </>
    );
}

export default DocumentsProduct