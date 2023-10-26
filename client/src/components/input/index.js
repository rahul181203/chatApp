import React from 'react'

const Input=({
    label= "",
    name = "",
    type = "text",
    required = true,
    className = "",
    placeholder = "",
    value = '',
    onChange = (e) => {},
}) => {
  return (
    <div className='w-1/2'>
        <label for={name} className='block text-sm font-medium text-gray-800 '>{label}</label>
        <input id={name} name={name} type={type} className={`bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`} 
        placeholder={placeholder} required={required} value={value} onChange={onChange} />
    </div>
  )
}

export default Input;