import React from 'react';
import { createRoot } from 'react-dom/client';
import SankeyExample from './SankeyExample';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <SankeyExample />
  </React.StrictMode>
); 