import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><AppRoutes /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
