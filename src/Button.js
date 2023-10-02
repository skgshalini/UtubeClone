import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='px-2 m-2 bg-gray-200 rounded'>
    {props.name}
      </button>
    </div>
  )
}

export default Button
