// LanguageSelector.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLanguage } from '../redux/languageSlice.js';
import Form from 'react-bootstrap/Form';


const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleLanguage());
  };

  return (
    <div>
      <Form.Select onChange={handleChange} aria-label="Default select example">
        <option value="en">En</option>
        <option value="ru">Ru</option>
      </Form.Select>     
    </div>

  );
};

export default LanguageSelector;