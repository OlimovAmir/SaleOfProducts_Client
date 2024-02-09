import React from 'react'
import { Col, Nav, NavItem, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

import fotoDisigner from '../images/chip_shema_protsessor_140251_1280x720.jpg';
import fotoDisigner2 from '../images/2.jpg';
import fotoDisigner3 from '../images/3.jpg';
import fotoDisigner4 from '../images/4.jpg';
import fotoDisigner5 from '../images/5.jpg';

function Documents() {
  return (
    <>
      <TabContainer id='ledt-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm={2}>
            <Nav variant='pills' className='flex-column mt-2'>
              <NavItem>
                <Nav.Link eventKey='first' className="nav-link" style={{ textAlign: 'left' }}>
                  Design
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link eventKey='second' className="nav-link" style={{ textAlign: 'left' }}>
                  Team
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link eventKey='third' className="nav-link" style={{ textAlign: 'left' }}>
                  Programming
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link eventKey='fourth' className="nav-link" style={{ textAlign: 'left' }}>
                  Design
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link eventKey='fifth' className="nav-link" style={{ textAlign: 'left' }}>
                  Libreries
                </Nav.Link>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <TabContent>
              <TabPane eventKey='first'>
                <img
                  src={fotoDisigner}
                  className='img-fluid'
                  alt='fotoDisigner'
                />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corporis architecto ipsam libero eligendi qui officiis minus eveniet
                  accusantium, maxime enim quae laudantium itaque repudiandae.
                  Eligendi omnis repudiandae ducimus fugit velit?
                </p>
              </TabPane>
              <TabPane eventKey='second'>
                <img
                  src={fotoDisigner2}
                  className='img-fluid'
                  alt='fotoDisigner2'
                />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corporis architecto ipsam libero eligendi qui officiis minus eveniet
                  accusantium, maxime enim quae laudantium itaque repudiandae.
                  Eligendi omnis repudiandae ducimus fugit velit?
                </p>
              </TabPane>
              <TabPane eventKey='third'>
                <img
                  src={fotoDisigner3}
                  className='img-fluid'
                  alt='fotoDisigner'
                />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corporis architecto ipsam libero eligendi qui officiis minus eveniet
                  accusantium, maxime enim quae laudantium itaque repudiandae.
                  Eligendi omnis repudiandae ducimus fugit velit?
                </p>
              </TabPane>
              <TabPane eventKey='fourth'>
                <img
                  src={fotoDisigner4}
                  className='img-fluid'
                  alt='fotoDisigner'
                />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corporis architecto ipsam libero eligendi qui officiis minus eveniet
                  accusantium, maxime enim quae laudantium itaque repudiandae.
                  Eligendi omnis repudiandae ducimus fugit velit?
                </p>
              </TabPane>
              <TabPane eventKey='fifth'>
                <img
                  src={fotoDisigner5}
                  className='img-fluid'
                  alt='fotoDisigner'
                />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corporis architecto ipsam libero eligendi qui officiis minus eveniet
                  accusantium, maxime enim quae laudantium itaque repudiandae.
                  Eligendi omnis repudiandae ducimus fugit velit?
                </p>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </>
  );
}

export default Documents