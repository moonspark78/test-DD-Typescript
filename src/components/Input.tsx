import React from 'react'

interface InputProps {
  onChangeColor: (e: any) => void; // Utilisation de 'any'
}


const Input = ({onChangeColor}:InputProps) => {
  return (
    <div className='mx-auto w-[200px] pt-3'>
        <input
            type='text'
            placeholder='Enter your description'
            className='border-2 border-black rounded p-2 w-full'
            onChange={onChangeColor}
        />
    </div>
  )
}

export default Input