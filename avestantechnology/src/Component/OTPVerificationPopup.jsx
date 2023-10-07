// src/components/OTPVerificationPopup.js
import React from 'react';
import classNames from 'classnames';

const OTPVerificationPopup = ({ isOpen, onClose }) => {
  return (
    <div
      className={classNames('fixed inset-0 flex items-center justify-center z-50', {
        hidden: !isOpen,
      })}
    >
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl mb-4">Enter OTP</h2>
        <div className="flex space-x-4">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded focus:outline-none"
            />
          ))}
        </div>
        <button className="mt-6 bg-bgclr text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onClose}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTPVerificationPopup;
