import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm({ onRegistrationSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://localhost:7267/Auth/Token', null, {
                params: {
                    username: username,
                    password: password,
                },
            });

            const { accessToken, refreshToken } = response.data;

            console.log('Access Token:', accessToken);
            console.log('Refresh Token:', refreshToken);

            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            // Дополнительные действия с полученными токенами
            // Вызываем функцию onRegistrationSuccess сразу после получения токенов
            onRegistrationSuccess();
        } catch (error) {
            console.error('Failed to get tokens:', error);
            // Дополнительные действия при неудаче
        }
    };
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Get Tokens</button>
      </form>
      {accessToken && (
        <div>
          <p>Access Token: {accessToken}</p>
          <p>Refresh Token: {refreshToken}</p>
        </div>
      )}
    </div>
    )
}

export default RegistrationForm