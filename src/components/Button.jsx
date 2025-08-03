import React from 'react'

const Button = ({btnText,className}) => {
  return (
  <button className={`font-bold text-[14px] py-3 px-6  ${className}`}>{btnText}</button>
  )
}

export default Button