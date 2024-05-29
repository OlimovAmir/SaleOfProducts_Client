import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faList, faPrint} from '@fortawesome/free-solid-svg-icons';
function GetAllCustomer() {
  return (
    <Container className="">
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2 w-50"
        value=""
        
      />
      <div className="">
        <h2>Список поставщиков</h2>
        <Button
          className='m-2'
          size="sm"
          variant="secondary"
          
        >
          <FontAwesomeIcon icon={faList} /> Добавить нового поставщика
        </Button>
        <Button className='m-2' size="sm" variant="secondary" >
          <FontAwesomeIcon icon={faFileExport} /> Экспорт в Excel
        </Button>
        <Button className='m-2' size="sm" variant="secondary">
          <FontAwesomeIcon icon={faPrint} /> Печать
        </Button>
      </div>

      
      
      
    </Container>
  )
}

export default GetAllCustomer