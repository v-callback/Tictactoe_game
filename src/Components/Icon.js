import React from 'react';
import { FaTimes,FaRegCircle, FaPen } from "react-icons/fa";



const Icon = ({choice})=>{
    switch(choice){
        case "cross":
            return <FaTimes className="icon"/>;
        case "circle":
            return <FaRegCircle />;
        default: 
            return <FaPen />;
    }
}
export default Icon