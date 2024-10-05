import React, { useState } from 'react';
import './App.css';
import DropDown from './components/DropDown';
import Input from './components/Input';
import ColorSelector from './components/ColorSelector';

function App() {

  const [color, setColor] = useState('')
  const [seletColor, setSeletColor] = useState('')


  const onChangeColor = (e:any) =>{
    setColor(e.target.value);
  }

  const onSelectChange = (e:any) =>{
    setSeletColor(e.target.value);
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

     <div 
        className='mt-9 border border-black  w-[300px] h-[300px] mx-auto'
        style={{ backgroundColor : `${seletColor}`}}
     >
     </div>
     <ColorSelector onSelectChange={onSelectChange}/>
    </div>
  );
}

export default App;
