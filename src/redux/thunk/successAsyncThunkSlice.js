import { setSuccessMessage } from '../reducers/successSlice.js';

export const performAsyncOperation = () => async dispatch => {
    // Здесь ваша асинхронная логика (например, отправка данных на сервер)
    // В случае успеха, устанавливаем сообщение об успешном выполнении операции
    dispatch(setSuccessMessage("Операция выполнена успешно"));
  };