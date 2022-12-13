import React from 'react'
import { useAppContext } from '../context/appContext'

const KeyboardBox = ({value}) => {
    let {keyDown,disabledKeys}=useAppContext()
  return (
    <div disabled={[...disabledKeys].includes(value)} onClick={()=>keyDown(value)} className='single-keyboard-box'>
        <h3>{value}</h3>
    </div>
  )
}

export default KeyboardBox
