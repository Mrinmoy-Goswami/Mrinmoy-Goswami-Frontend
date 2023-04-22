import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import WrappedListComponent from './Components/WrappedListComponent';
// import Mem from './Components/C2';
// import { C1,C3 } from './Components/c1';
import List from './Components/DebuggedList';
// import WrappedListComponent from './Components/DebuggedList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <List/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
