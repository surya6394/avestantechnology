// src/components/StatusBar.js
import React from 'react';
import classNames from 'classnames';

const StatusBar = ({ status }) => {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={classNames('h-4 w-4 rounded-full', {
          'bg-green-400': status === 'Application Submitted',
          'bg-bgclr': status === 'In Progress',
          'bg-gray-400': status === 'Approved',
        })}
      />
      <span>{status}</span>
    </div>
  );
};

export default StatusBar;
