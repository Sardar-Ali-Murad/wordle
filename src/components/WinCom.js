
import React from 'react'
import { useAppContext } from '../context/appContext'

const Win = () => {
    let {currentRow,Reset,Win,lose}=useAppContext()
  return (
    <div>
        {
        Win &&
        <>
         <h1 style={{color:"white"}} className='text-center'>Congratulations You Won to gusee the word in {currentRow} count</h1>
            <button className='btn div-center' onClick={()=>Reset()}>Reset</button>
        </>
       }
       <div>
       {
        lose &&
        <>
         <h1 style={{color:"white"}} className='text-center'>You Lose the game reset to paly again</h1>
            <button className='btn div-center' onClick={()=>Reset()}>Reset</button>
        </>
       }
       </div>
    </div>
  )
}

export default Win
