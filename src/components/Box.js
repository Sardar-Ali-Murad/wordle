import React from 'react'
import { useAppContext } from '../context/appContext'

const Box = ({row,column}) => {
    let {Board}=useAppContext()
  return (
    <div className="single-box" style={{background:Board[row][column].color,color:"white"}}>
      <p style={{color:"white",fontWeight:"bolder",fontSize:"20px"}}>{Board[row][column].value}</p>
    </div>
  )
}

export default Box
