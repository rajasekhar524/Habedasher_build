import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {store, persistor} from './redux/createStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import Scrolltotop from './Scrolltotop'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      {/* <Scrolltotop /> */}
        <PersistGate persistor={persistor}>
          <App /> 
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);