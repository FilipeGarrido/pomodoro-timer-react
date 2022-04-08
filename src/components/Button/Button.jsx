import React, {useState,useEffect} from "react";
import "./button.scss";

export default function Button({ btnClass, btnTitle, btnImage, isPressed, active}){
    
    const [isActive,setIsActive] = useState( btnClass === 'pause' ? 'pressed' : '');

    useEffect(()=>{
        switch(btnClass){
            case 'start':
                return active ? setIsActive('pressed') : setIsActive('')
            case 'pause':
                return active ? setIsActive('') : setIsActive('pressed')
            default:
                return setIsActive('')
            
        }
    },[active])

    return(
        <div className="btn-box">
            <button className={"btn " + btnClass + ' ' + isActive} 
                    onClick={()=>{isPressed(btnClass);}}>
                        <img src={btnImage} alt={btnTitle} width='40px'/>
            </button>
        </div>
    );
}