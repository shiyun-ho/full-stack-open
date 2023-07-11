import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

//renders contents into the <div> element
//it is defined in public/index.html
//id value of 'root'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)