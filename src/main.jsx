import React from 'react';
import ReactDOM from 'react-dom/client';
//import { FormWhitCostomHook } from './02-useEffect/FormWhitCostomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/simpleForm';
//import { HooksApp } from './HooksApp';
import './index.css';
//import { FocusScreen } from './04-useRef/FocusScreen';
import { Layaut } from './05-useLayoutEffect/Layaut';

ReactDOM.createRoot(document.getElementById('root')).render(
  //{<React.StrictMode>}
    < Layaut />
  //{</React.StrictMode>}
)
