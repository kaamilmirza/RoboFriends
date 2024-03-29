import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';
import './index.css'
ReactDOM.render(
  <App/>,          
  document.getElementById('root')
);

// If you want to s tart measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();