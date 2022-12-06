import React from 'react';
import ReactDOM from 'react-dom/client';
import BaiTapBurger from './components/BT Burger/BaiTapBurger';


// redux
import { Provider } from 'react-redux';
import { store } from './components/redux/configStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div>
      <BaiTapBurger />
    </div>
  </Provider>
);


