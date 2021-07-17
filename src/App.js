import React, {useState} from 'react'
import Icon from "./Components/Icon"

// import react - toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import reactstarp
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const tictactoeArray = new Array(9).fill("")

const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictactoeArray.fill("")

    }

    const findWinner=()=>{
        if(tictactoeArray[0]== tictactoeArray[1] && tictactoeArray[0]==tictactoeArray[2] && tictactoeArray[0]!=""){
            setWinMessage(tictactoeArray[0]+" has won")
        }
        else if(tictactoeArray[3]== tictactoeArray[4] && tictactoeArray[3]==tictactoeArray[5] && tictactoeArray[3]!=""){
            setWinMessage(tictactoeArray[3]+" has won")
        }
        else if(tictactoeArray[6]== tictactoeArray[7] && tictactoeArray[6]==tictactoeArray[8] && tictactoeArray[6]!=""){
            setWinMessage(tictactoeArray[6]+" has won")
        }
        else if(tictactoeArray[0]== tictactoeArray[3] && tictactoeArray[0]==tictactoeArray[6] && tictactoeArray[0]){
            setWinMessage(tictactoeArray[0]+" has won")
        }
        else if(tictactoeArray[1]== tictactoeArray[4] && tictactoeArray[1]==tictactoeArray[7] && tictactoeArray[1]){
            setWinMessage(tictactoeArray[1]+" has won")
        }
        else if(tictactoeArray[2]== tictactoeArray[5] && tictactoeArray[2]==tictactoeArray[8] && tictactoeArray[2]){
            setWinMessage(tictactoeArray[2]+" has won")
        }
        else if(tictactoeArray[2]== tictactoeArray[4] && tictactoeArray[2]==tictactoeArray[6] && tictactoeArray[2]){
            setWinMessage(tictactoeArray[2]+" has won")
        }
        else if(tictactoeArray[0]== tictactoeArray[4] && tictactoeArray[0]==tictactoeArray[8] && tictactoeArray[0]){
            setWinMessage(tictactoeArray[0]+" has won")
        }

    }
    return(
        <div> <Icon choice="cross"/> </div>
    )
}

export default App
