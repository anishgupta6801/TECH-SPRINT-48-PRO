// This file doesn't execute anything but ensures dependencies are properly bundled
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

// Force preload these critical packages
console.log('Preloading critical dependencies');
console.log('React version:', React.version);
console.log('ReactDOM available:', !!ReactDOM);
console.log('Router available:', !!HashRouter);

// This file is imported by main.tsx to ensure dependencies are available 