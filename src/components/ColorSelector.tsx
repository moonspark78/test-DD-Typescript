import React from 'react'

interface Props{
    onSelectChange (e: any): void
}

const ColorSelector = ({onSelectChange}: Props) => {

    const colors = ['Red', 'Green', 'Blue', 'Yellow'];


  return (
    <div className='mt-10 w-[200px]'>
        <select
            onChange={onSelectChange}
            className='border-2 border-black rounded p-2 w-full'
        >
            {colors.map((color, index) =>(
                <option key={index} value={color}>
                    {color}
                </option>
            ))}
        </select>
    </div>
  )
}

export default ColorSelector