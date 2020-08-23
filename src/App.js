import React from 'react';
import './App.css';
import Parent from './Parent';
import {TransactionProvider} from './Transcontext';


function App() {
  return (
    <TransactionProvider>
      <div>
     <Parent />
    </div>
    </TransactionProvider>
  );
}

export default App;
