import React from "react";
import "./header.scss";
import NavBar from "../../../components/NavBar/NavBar";

export default function Header(){
    
    return(
        
        <div className="Header">
            <h1>Pomodoro Clock:</h1>
            <ul>
                <NavBar titlePage="Work"/>
                <NavBar titlePage="Short Rest"/>
                <NavBar titlePage="Long Rest"/>
            </ul>
        </div>
    );
}
