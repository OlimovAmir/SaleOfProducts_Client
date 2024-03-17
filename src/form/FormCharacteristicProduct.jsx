import React, { useState } from 'react';

function FormCharacteristicProduct() {
    // Хранение строк с двумя столбцами
  const [rows, setRows] = useState([]);

  // Обработчик события для добавления строки
  const addRow = () => {
    // Создаем новую строку
    const newRow = { column1: '', column2: '' };
    // Обновляем состояние, добавляя новую строку
    setRows([...rows, newRow]);
  };

  // Обработчик события для удаления строки
  const deleteRow = (index) => {
    // Создаем копию массива строк
    const updatedRows = [...rows];
    // Удаляем строку по индексу
    updatedRows.splice(index, 1);
    // Обновляем состояние
    setRows(updatedRows);
  };

  return (
    <div>
      {/* Кнопка для добавления строки */}
      <button onClick={addRow}>Добавить строку</button>
      {/* Отображение строк */}
      {rows.map((row, index) => (
        <div key={index}>
          {/* Форма для заполнения значений строк */}
          <input
            type="text"
            value={row.column1}
            onChange={(e) => {
              // Обновляем значение в состоянии при изменении ввода
              const updatedRows = [...rows];
              updatedRows[index].column1 = e.target.value;
              setRows(updatedRows);
            }}
          />
          <input
            type="text"
            value={row.column2}
            onChange={(e) => {
              // Обновляем значение в состоянии при изменении ввода
              const updatedRows = [...rows];
              updatedRows[index].column2 = e.target.value;
              setRows(updatedRows);
            }}
          />
          {/* Кнопка для удаления строки */}
          <button onClick={() => deleteRow(index)}>Удалить строку</button>
        </div>
      ))}
    </div>
  )
}

export default FormCharacteristicProduct