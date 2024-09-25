import React, { useState } from 'react'
import { ArrowFatDown, ArrowFatUp} from "phosphor-react";

const DropDown = ({ options } : { options : string[] }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);  // Alterne entre ouvert et fermé
    };


  return (
    <div className='relative'>
        <button
            onClick={toggleDropdown}
            className='rounded flex items-center text-white px-2 py-1 hover:bg-gray-400 bg-gray-500  text-xl'
        >
            <div className='mr-2'>DropDown</div>
            <div>
                {isOpen ? <ArrowFatUp size={16} /> : <ArrowFatDown size={16} />}
                
            </div>
        </button>

        {
            isOpen && 
            <div className='bg-black absolute rounded border text-white py-2 mt-2 w-40'>
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