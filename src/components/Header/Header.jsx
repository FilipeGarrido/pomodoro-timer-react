import React, { useState } from "react";
import PropTypes from "prop-types";
import "./header.scss";
import NavBar from "../NavBar/NavBar";

export default function Header({screenSelector, screenType}){
    

    
    return(
        
        <div>
            <ul>
                <NavBar titlePage="Pomodoro" screenClassSelector={screenType} screenSelector={screenSelector}/>
                <NavBar titlePage="Rest" screenClassSelector={screenType} screenSelector={screenSelector}/>
                <NavBar titlePage="Options" screenClassSelector={screenType} screenSelector={screenSelector}/>
            </ul>
        </div>
    );
}
