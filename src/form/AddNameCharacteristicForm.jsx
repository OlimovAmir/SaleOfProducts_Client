// AddNameCharacteristicForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { hideFormAddNameCharacteristic } from '../redux/reducers/AddNameCharacteristicSlice';

function AddNameCharacteristicForm({ updateCharacteristics }) {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5134/NameCharacteristicProduct/Create', {
        name: name,
      });
      console.log('Response:', response.data);
      dispatch(hideFormAddNameCharacteristic());
      updateCharacteristics(); // Обновление списка характеристик после успешной отправки данных
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <h1>Add Name Characteristic</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch(hideFormAddNameCharacteristic())}>Cancel</button>
      </form>
    </div>
  );
}

export default AddNameCharacteristicForm;