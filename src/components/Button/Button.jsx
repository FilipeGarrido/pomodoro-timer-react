import React,{useState} from "react";
import "./button.scss";

export default function Button({ btnClass, btnTitle, btnImage, isPressed}){
    return(
        <div className="btn-box">
            <button className={"btn " + btnClass} onClick={()=>{isPressed(btnClass);}}><img src={btnImage} alt={btnTitle} width='60px'/></button>
        </div>
    );
}