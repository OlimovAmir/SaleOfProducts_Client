import React, { useState } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './form/RegistrationForm';
import Header from './components/header/Header';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };
  return (
    <div className="App">
      <header className="">
        {isRegistered ? <Header /> : <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />}
      </header>
    </div>
  );
}

export default App;
