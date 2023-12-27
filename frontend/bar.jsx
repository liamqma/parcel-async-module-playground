import "./vendor"
import React, { StrictMode } from 'react';
import { render } from 'react-dom';

render(
  <StrictMode>
    <div>Bar</div>
  </StrictMode>,
  document.getElementById('root')
);
