import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HocCounter from './HocCounter';
import Counter from './Counter';
import CounterRender from './CounterRender';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// hoc
// const Enhanced = HocCounter(Counter)
// root.render(<Enhanced />)
// renderprops
root.render(<CounterRender render={props => <Counter {...props}/>} />)
