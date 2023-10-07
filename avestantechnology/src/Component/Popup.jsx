// src/App.js
import React, { useState } from 'react';
import OTPVerificationPopup from './OTPVerificationPopup';

function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="bg-bgclr text-white px-4 py-2 rounded hover:bg-blue-600" onClick={togglePopup}>
          Open OTP Popup
        </button>
        <OTPVerificationPopup isOpen={isPopupOpen} onClose={togglePopup} />
      </header>
    </div>
  );
}

export default Popup;
