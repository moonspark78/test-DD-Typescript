import React from 'react';
import './App.css';
import DropDown from './components/DropDown';

function App() {
  return (
    <div className="p-14">
     <DropDown options={[ 'Item 1', 'Item 2', 'Item 3' ]}/>
    </div>
  );
}

export default App;
