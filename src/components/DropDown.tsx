import React, { useState } from 'react'
import { Horse} from "phosphor-react";

const DropDown = ({ options } : { options : string[] }) => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <button
            onClick={() => setIsOpen(true)}
            className='rounded text-white px-2 py-1 hover:bg-gray-400 bg-gray-500  text-xl'
        >
            DropDown
            <Horse/>
        </button>

        {
            isOpen && 
            <div className='bg-black rounded border text-white py-1'>
                <ul>
                    {options.map(option => (
                        <li className='hover:bg-blue-500 cursor-pointer px-2' key={option}>{option}</li>
                    ))}
                </ul>
            </div>
        }
    </div>
  )
}

export default DropDown