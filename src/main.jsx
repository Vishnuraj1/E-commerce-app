import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'

library.add(fas);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  // </React.StrictMode>,
)
