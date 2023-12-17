import React from 'react';
import ReactDOM from 'react-dom/client';
//import { FormWhitCostomHook } from './02-useEffect/FormWhitCostomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/simpleForm';
//import { HooksApp } from './HooksApp';
import './index.css';
import { TodoApp } from './08-useReducer/TodoApp';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layaut } from './05-useLayoutEffect/Layaut';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallBackHook } from './06-memos/CallBackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  //{<React.StrictMode>}
    < TodoApp />
  //{</React.StrictMode>}
)
