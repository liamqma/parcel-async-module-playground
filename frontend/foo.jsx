import React, { StrictMode } from 'react';
import { render } from 'react-dom';

render(
  <StrictMode>
    <div>Foo</div>
  </StrictMode>,
  document.getElementById('root')
);
