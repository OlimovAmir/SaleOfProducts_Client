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
    <div className="App video-background">
      <video autoPlay loop muted>
        <source src="your-video.mp4" type="video/mp4" />
        {/* Добавьте дополнительные форматы, если нужно */}
        Your browser does not support the video tag.
      </video>
      <header className="">
        {isRegistered ? <Header /> : <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />}
      </header>
    </div>
  );
}

export default App;
