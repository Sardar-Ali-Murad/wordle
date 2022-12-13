import React, { useReducer, useContext} from 'react'
import reducer from './reducer'
import board from './Board'
import Words from "./Words.txt"

import {
  HANDLE_CHANGE,
  HANDLE_CHECK,
  KEY_PRESSED,
  CHANGE_BOARD,
  INCREASE_COLUMN,
  DEL_KEY,
  ENTER_KEY,
  RESET_COL_ROW,
  WIN_HAPPENS,
  DISABLED_KEYS,
  RESET,
  TODAYS_WORD,
  LOSE
} from './actions'


console.log(board)


const initialState = {
  Board:board,
  currentKey:"",
  currentRow:0,
  currentColumn:0,
  actualWord:[],
  disabledKeys:new Set(),
  Win:false,
  finalMessage:"",
  lose:false
}



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  React.useEffect(()=>{
    let start=async ()=>{
      let data=await fetch(Words)
      let text=await data.text()
      let arr=(text.split("\n"))
      let random=Math.floor(Math.random()*arr.length-1)
      let todaysWord=arr[random]
      console.log(todaysWord)
      dispatch({type:TODAYS_WORD,payload:{word:todaysWord.toUpperCase().split('').slice(0,-1)}})
    }
    start()
  },[])
  

    function keyDown(key){
      if(state.currentRow!==6 && !state.Win && !state.lose){
        let TempCol=state.currentColumn+1
        if(TempCol<6){
          dispatch({type:KEY_PRESSED,payload:{key:key}})
          dispatch({type:CHANGE_BOARD})
          dispatch({type:INCREASE_COLUMN})
        }
      }
    }
    
  function handleChange(name,value){
    dispatch({type:HANDLE_CHANGE,payload:{name:name,value:value}})
  }

  function handleCheck(name,checked){
    dispatch({type:HANDLE_CHECK,payload:{name:name,value:checked}})
  }

  function delKey(){
    if(state.currentColumn!==0 && !state.Win && !state.lose){
      dispatch({type:DEL_KEY})
    }
  }

  function Enter(){
    if(state.currentColumn===5 && !state.Win && !state.lose){
    
      for(let i=0;i<5;i++){

        if(state.Board[state.currentRow][i].value.toUpperCase()===state.actualWord[i].toUpperCase()){
          dispatch({type:ENTER_KEY,payload:{column:i,color:"green"}})
        }
        
      else if(state.actualWord.includes(state.Board[state.currentRow][i].value.toUpperCase())){
        dispatch({type:ENTER_KEY,payload:{column:i,color:"yellow"}})
      }
      
      else{
        dispatch({type:ENTER_KEY,payload:{column:i,color:"gray"}})
      }
      
    }

    let cond=state.actualWord.every((all,index)=>all===state.Board[state.currentRow][index].value)
    if(cond){
      dispatch({type:WIN_HAPPENS})
    }

    dispatch({type:RESET_COL_ROW})
  }

  }


  function Reset(){
    dispatch({type:RESET,payload:{Board:board}})
  }


  React.useEffect(()=>{
     if(state.currentRow===6 &&  state.Win===false){
      dispatch({type:LOSE,payload:{data:"Soory You Lose the game Reset To Play Again"}})
     }
  },[state.currentRow])


  




  
  return (
    <AppContext.Provider
    value={{
      ...state,
      handleChange,
      handleCheck,
      keyDown,
      delKey,
      Enter,
      Reset
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
