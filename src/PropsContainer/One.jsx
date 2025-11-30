import React from 'react'

const One = (props) => {
  const{model,year}= props.myCar;
  return (
    <div>
    <div>{model}</div>
    <div>{year}</div>
    </div>
  )
}
export default One
