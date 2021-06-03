import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robot';
import CardList from './Cardlist'
ReactDOM.render(
  <CardList robots = {robots}/>,
  document.getElementById('root')
);

// If you want to s tart measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();