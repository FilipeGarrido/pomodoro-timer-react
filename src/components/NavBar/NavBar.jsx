import React from "react";
import propTypes from "prop-types";
import "./navbar.scss";

export default function NavBar({titlePage, screenSelector, screenClassSelector}){

    let classSelector = "";
  

    let screenSelection = (event)=>{
        screenSelector(event.target.accessKey); 
    }

    const changeClass = () => {

        let classSelector = "";

        if(titlePage == screenClassSelector){
            classSelector = "active";
        }else{
            classSelector = "deactive";
        }
        return classSelector;
    }

    return(
        <li key={titlePage} className={changeClass()}><button className="navbar-button" onClick={(event)=>{
            screenSelection(event);
            changeClass();
        }} accessKey={titlePage}>{titlePage}</button></li>
    );

    

}

NavBar.propTypes = {
    titlePage: propTypes.string.isRequired,
}