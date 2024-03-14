// App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Dummy credentials check
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // Display error message
    }
  };

  return (
    <div>
      {!isLoggedIn ? <LoginForm handleLogin={handleLogin} /> : <Homepage />}
    </div>
  );
};

export default App;
