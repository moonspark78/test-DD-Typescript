import React, { useState } from 'react';
import './App.css';
import DropDown from './components/DropDown';
import Input from './components/Input';

function App() {

  const [color, setColor] = useState('')


  const onChangeColor = (e:any) =>{
    setColor(e.target.value);
  }



  return (
    <div className="p-14">
     <DropDown options={[ 'Item 1', 'Item 2', 'Item 3' ]}/>

     <div 
        className='mt-3 border border-black  w-[250px] h-[300px] mx-auto'
        style={{ backgroundColor : `${color}`}}
     >

     </div>
     <Input onChangeColor={onChangeColor}/>
    </div>
  );
}

export default App;
