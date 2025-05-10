// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './Game';      // Import the Game component with time-travel
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
