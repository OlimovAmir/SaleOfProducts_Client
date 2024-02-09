import React from 'react'
import CarouselBox from '../components/CarouselBox'
import { Button, Card, CardGroup, CardImg, Container } from 'react-bootstrap'
import fotoit1 from '../assets/it-1.jpg'
import fotoit2 from '../assets/it-2.jpg'
import fotoit3 from '../assets/it-3.jpg'

function Home() {
  return (
    <>
      <CarouselBox />
      <Container>
        <h2 className='text-center m-4'> Our team </h2>
        <CardGroup>
        <Card className='me-2 ms-2' border='primary' text='primary'>
          <CardImg
            variant='top'
            src={fotoit1}
            alt='foto'
          />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus laudantium modi mollitia.
            </Card.Text>
          </Card.Body>
          <Button variant='primary' >About team</Button>
        </Card>
        <Card className='me-2 ms-2' bg='info'>
          
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus laudantium modi mollitia.
            </Card.Text>
          </Card.Body>
          <CardImg
            variant='bottom'
            src={fotoit2}
            alt='foto'
          />
          <Button variant='primary' >About team</Button>
        </Card>
        <Card className='me-2 ms-2' border='primary' text='primary'>
          <CardImg
            variant='top'
            src={fotoit3}
            alt='foto'
          />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus laudantium modi mollitia.
            </Card.Text>
          </Card.Body>
          <Button variant='primary' >About team</Button>
        </Card>
        </CardGroup>
        
        
      </Container>
    </>

  )
}

export default Home