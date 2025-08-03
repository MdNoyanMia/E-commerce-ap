import React from 'react'

const Image = ({imgSrc, className}) => {
  return (
    <img className={`${className}`} src={imgSrc} alt="" />
  )
}

export default Image