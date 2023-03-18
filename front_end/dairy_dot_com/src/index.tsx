import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Button from "./Button";
import reportWebVitals from './reportWebVitals';
//import NumberButton from './NumberButton';
//import Row from './Row';
//import Tet from './Tet';
import { ActualApp } from './ActualApp';
import './fonts/digital-7.ttf';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Counter } from './features/counter/counter';
import t from './features/display/displaySlice';
import { Display } from './features/display/display';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
for (var y in t) { 
  console.log(y)
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Display/>
    </Provider>
    
  </React.StrictMode>
);//<App />
/*
    <NumberButton buttonContent="pp" />
    <Button />
<Row/>
<Tet />
<Counter/>

<ActualApp/>
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
