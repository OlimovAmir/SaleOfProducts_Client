import React from 'react'
import { useSelector } from 'react-redux';
import { Col, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import GetAllCach from './GetAllCach';

function DocumentCashIncome() {
  const language = useSelector(state => state.language.value);
  return (
    <div>
      <TabContainer id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={2}>
                        <Nav variant='pills' className='flex-column mt-2'>                            
                            <NavItem>
                                <Nav.Link eventKey='first' className="nav-link" style={{ textAlign: 'left' }}>
                                    {language === 'en' ? 'Get All Cash' : 'Список поступлений'}
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
                                <GetAllCach/>
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

export default DocumentCashIncome