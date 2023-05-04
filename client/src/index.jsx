import React from 'react';
// import reactDOM from 'react-dom';
// (does the same thing as the line below, but doesn't destructure for the function)
import { createRoot } from 'react-dom/client';

import App from './components/App';

createRoot(document.getElementById('root')).render(<App />);
