import React from 'react'
import { useSelector } from 'react-redux';
import { Col, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import StaticsCashIncome from './StaticsCashIncome';

function DocumentsStatics() {
    const language = useSelector(state => state.language.value);
  return (
    <div>
        <TabContainer id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={2}>
                        <Nav variant='pills' className='flex-column mt-2'>                            
                            <NavItem>
                                <Nav.Link eventKey='first' className="nav-link" style={{ textAlign: 'left' }}>
                                    {language === 'en' ? 'Сash income' : 'Поступление Денег'}
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='cashExpenses' className="nav-link" style={{ textAlign: 'left' }}>
                                    {language === 'en' ? 'Сash Expenses' : 'Расходы Денег'}
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='productPurchase' className="nav-link" style={{ textAlign: 'left' }}>
                                    {language === 'en' ? 'Product Purchase' : 'Поступление Товара'}
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey='returnProduct' className="nav-link" style={{ textAlign: 'left' }}>
                                    {language === 'en' ? 'Return of the product' : 'Возврат Товара'}
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
                                <StaticsCashIncome/>
                            </TabPane>
                            <TabPane eventKey='getAll'>
                                
                            </TabPane>
                            <TabPane eventKey='setting'>
                               
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
    </div>
  )
}

export default DocumentsStatics