import React from 'react'
import { useAppContext } from '../context/appContext'
import Box from './Box'

const Board = () => {
  let {currentRow,Reset,Win}=useAppContext()
  // console.log(Win)
  return (
    <div style={{height:"350px",margin:"0px"}}>
    <div className='board-grid div-center-30'>
      <Box row={0} column={0}/>
      <Box row={0} column={1}/>
      <Box row={0} column={2}/>
      <Box row={0} column={3}/>
      <Box row={0} column={4}/>

      <Box row={1} column={0}/>
      <Box row={1} column={1}/>
      <Box row={1} column={2}/>
      <Box row={1} column={3}/>
      <Box row={1} column={4}/>

   
      <Box row={2} column={0}/>
      <Box row={2} column={1}/>
      <Box row={2} column={2}/>
      <Box row={2} column={3}/>
      <Box row={2} column={4}/>

      <Box row={3} column={0}/>
      <Box row={3} column={1}/>
      <Box row={3} column={2}/>
      <Box row={3} column={3}/>
      <Box row={3} column={4}/>

      <Box row={4} column={0}/>
      <Box row={4} column={1}/>
      <Box row={4} column={2}/>
      <Box row={4} column={3}/>
      <Box row={4} column={4}/>

      <Box row={5} column={0}/>
      <Box row={5} column={1}/>
      <Box row={5} column={2}/>
      <Box row={5} column={3}/>
      <Box row={5} column={4}/>

    </div>
    </div>
  )
}

export default Board
