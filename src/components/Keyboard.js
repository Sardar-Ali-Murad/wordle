import React from 'react'
import { useAppContext } from '../context/appContext'

import KeyboardBox from './KeyboardBox'

const Keyboard = () => {
    let {delKey,Enter,keyDown,currentColumn}=useAppContext()

    let key1=[" Q","W","E","R","T","Y","U","I","O","P"]
    let key2=["A","S","D","F","G","H","J","K","L"]
    let key3=["Z","X","C","V","B","N","M"]

    
  // let keys=[
  //   "Q","W","E","R","T","Y","U","I","O","P",
  //    "A","S","D","F","G","H","J","K","L",
  //    "Z","X","C","V","B","N","M"
  // ]

  // React.useEffect(()=>{
  //   function fun(event){
  //     console.log(typeof event.key)
  //       if(event.key=="Enter"){
  //           Enter()
  //       }
  //       if(event.key=="Backspace"){
  //           delKey()
  //       }
  //       if(keys.includes(event.key.toUpperCase()) && currentColumn!=5){
  //           keyDown(event.key.toUpperCase())
  //       }
  //   }
  //   document.addEventListener("keydown",fun)

  //   return ()=>{
  //     document.removeEventListener("keydown",fun)
  //   }
  // },[])

   
  return (
    <div className='keyboard-main div-center-50'>
        <div className='key-1'>
        {
          key1.map((all)=><KeyboardBox value={all}/>)
        }
        </div>

        <div className='key-2'>
        {
          key2.map((all)=><KeyboardBox value={all}/>)
        }
        </div>

        <div className='key-3'>

        {
          key3.map((all)=><KeyboardBox value={all}/>)
        }
        <div onClick={()=>Enter()} className='single-keyboard-box-spe'><h3>Enter</h3></div>
        <div   className='single-keyboard-box-spe' onClick={()=>delKey()}><h3>Delete</h3></div>
        </div>
    </div>
  )
}

export default Keyboard
