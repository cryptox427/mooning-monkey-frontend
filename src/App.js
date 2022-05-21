import React from 'react';
import Routes from './Routes';
import './App.css';
import './base.scss';
import './assets/font/Nurom-Bold.ttf';
import './assets/font/Poppins-Medium.ttf';
import './assets/font/Poppins-SemiBold.ttf';
import store from './store'
import {Provider} from 'react-redux';

function App() {
	
  return (
    <div>
    <Provider store={store}>
    	<Routes/>
    </Provider>
    </div>
  );
}

export default App;
