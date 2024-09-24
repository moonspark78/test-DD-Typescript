import React, { useState } from 'react'

const DropDown = ({ options } : { options : string[] }) => {
    
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <button
            onClick={() => setIsOpen(true)}
            className='rounded text-white px-2 py-1 hover:bg-gray-400 bg-gray-500  text-xl'
        >
            DropDown
        </button>

        {
            isOpen && 
            <div className='bg-black rounded border text-white px-2 py-1'>Test</div>
        }
    </div>
  )
}

export default DropDown