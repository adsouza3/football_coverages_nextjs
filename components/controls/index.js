import React from 'react';

import Positioning from './offense/positioning';
import Routes from './offense/routes';
import Defense from './defense';

import './styles.css';

const Controls = () => {
  return <div className="settings-container">
    <Positioning />
    <Defense />
    <Routes />
  </div>;
};

export default Controls;