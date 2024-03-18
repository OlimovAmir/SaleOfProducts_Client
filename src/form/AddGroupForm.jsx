import React from 'react';
import { Form, Button } from 'react-bootstrap';


function AddGroupForm({ onSubmit, onClose }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
      };
  return (
    <Form onSubmit={handleSubmit}>
      {/* Добавьте поля для заполнения формы */}
      {/* Например: */}
      <Form.Group controlId="groupName">
        <Form.Label>Group Name</Form.Label>
        <Form.Control type="text" placeholder="Enter group name" />
      </Form.Group>
      {/* Добавьте другие поля, если необходимо */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" onClick={onClose} className="ml-2">
        Close
      </Button>
    </Form>
  )
}

export default AddGroupForm