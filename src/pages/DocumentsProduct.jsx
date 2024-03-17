import React from 'react'
import { Col, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import FormUnit from '../form/FormUnit';
import { useSelector } from 'react-redux';
import GroupProduct from './groupProduct/GroupProduct.jsx';
import GetAllProduct from './product/GetAllProduct.jsx';


function DocumentsProduct() {
    const language = useSelector(state => state.language.value);
    return (
        <>
            <TabContainer id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={2}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <NavItem>
                                <Nav.Link eventKey='first' className="nav-link" style={{ textAlign: 'left' }}>
                                {language === 'en' ? 'Purchase of product' : 'Покупка продукта'}
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='update' className="nav-link" style={{ textAlign: 'left' }}>
                                {language === 'en' ? 'Sale of product' : 'Продажа продукта'}
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='delete' className="nav-link" style={{ textAlign: 'left' }}>
                                {language === 'en' ? 'Write-off product' : 'Списание продукта'}
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='getAll' className="nav-link" style={{ textAlign: 'left' }}>
                                {language === 'en' ? 'Get All List products' : 'Спикок всех продуктов'}
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='GroupProduct' className="nav-link" style={{ textAlign: 'left' }}>
                                {language === 'en' ? 'Group product' : 'Спикок группа продуктов'}
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
                            <TabPane eventKey='update'>
                                <FormUnit/>
                            </TabPane>
                            <TabPane eventKey='delete'>
                                
                            </TabPane>
                            <TabPane eventKey='getAll'>
                                <GetAllProduct/>
                            </TabPane>
                            <TabPane eventKey='GroupProduct'>
                                <GroupProduct/>
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

export default DocumentsProduct