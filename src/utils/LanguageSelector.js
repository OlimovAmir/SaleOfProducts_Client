// LanguageSelector.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLanguage } from '../redux/languageSlice.js';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleLanguage());
  };

  return (
    <select onChange={handleChange}>
      <option value="en">En</option>
      <option value="ru">Ru</option>
    </select>
  );
};

export default LanguageSelector;