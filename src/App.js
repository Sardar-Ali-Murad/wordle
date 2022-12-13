
import React from "react";
import {Header,Board,Keyboard,WinCom} from './components/index'
import { useAppContext } from "./context/appContext";

function App() {
  let {Enter,delKey,keyDown}=useAppContext()

  return (
    <div className="main">
       <Header/>
       <WinCom/>
       <Board/>
       <Keyboard/>
    </div>
  );
}

export default App;
