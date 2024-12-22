import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // اضافه کردن Provider
import App from './App';
import store from '../src/store/store'; // فایل مربوط به store
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* افزودن Provider و اتصال به store */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
