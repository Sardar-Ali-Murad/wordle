
import {initialState}  from "./appContext"
import Board from "./Board"

import {
   HANDLE_CHANGE,
   HANDLE_CHECK,
   KEY_PRESSED,
   CHANGE_BOARD,
   INCREASE_COLUMN,
   DEL_KEY,
   RESET_COL_ROW,
   ENTER_KEY,
   DISABLED_KEYS,
   WIN_HAPPENS,
   RESET,
   TODAYS_WORD,
   LOSE
} from './actions'
import { act } from "react-dom/test-utils"

const reducer = (state, action) => {
  if(action.type===HANDLE_CHANGE){
    return {
      ...state,
      [action.payload.name]:action.payload.value
    }
   }

   if(action.type===HANDLE_CHECK){
    return {
      ...state,
      [action.payload.name]:action.payload.checked
    }
   }

   if(action.type===KEY_PRESSED){
    return{
      ...state,
      currentKey:action.payload.key
    }
   }

   if(action.type===CHANGE_BOARD){
      let tempBoard=state.Board
      tempBoard[state.currentRow][state.currentColumn].value=state.currentKey
        return {
          ...state,
          Board:tempBoard,
        }
    
   }

   if(action.type===INCREASE_COLUMN){
      return{
        ...state,
        currentColumn:state.currentColumn+1
      }
   }

   if(action.type===DEL_KEY){
     let tempCol=state.currentColumn-1
     let tempBoard=state.Board
     tempBoard[state.currentRow][state.currentColumn-1].value=""
    return {
      ...state,
      Board:tempBoard,
      currentColumn:tempCol
    }
   }


   if(action.type===ENTER_KEY){
    let tempBoard=state.Board
    tempBoard[state.currentRow][action.payload.column].color=action.payload.color
    return{
      ...state,
      Board:tempBoard,
      disabledKeys:action.payload.color==="gray"?state.disabledKeys.add(tempBoard[state.currentRow][action.payload.column].value):state.disabledKeys
    }
   }

   if(action.type===RESET_COL_ROW){
     return{
      ...state,
      currentRow:state.currentRow+1,
      currentColumn:0,
     }
   }


   if(action.type===WIN_HAPPENS){
    return {
      ...state,
      Win:true,
      finalMessage:`You Win The Game in ${state.currentRow+1} count Reset To Play Again`
    }
   }

   if(action.type===RESET){
    return {...initialState,Board:Board,disabledKeys:new Set()}
   }

   if(action.type===TODAYS_WORD){
    console.log(action.payload.word)
    return{
      ...state,
      actualWord:action.payload.word
    }
   }

   if(action.type===LOSE){
    return{
      ...state,
       finalMessage:action.payload.data,
       lose:true
    }
   }


   

  throw new Error(`no such action : ${action.type}`)
}

export default reducer
