import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../reducers/languageSlice.js';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <select onChange={handleChange}>
      <option value="en">En</option>
      <option value="ru">Ru</option>
    </select>
  );
};

export default LanguageSelector;