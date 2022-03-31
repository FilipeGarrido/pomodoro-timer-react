import React ,{ useContext } from "react";
import propTypes from "prop-types";
import "./navbar.scss";
import {AppContext} from '../../data/Store'

export default function NavBar({titlePage}){
  
    const {screenType , setScreenType } = useContext(AppContext)

    const screenSelection = (event)=>{
        setScreenType(event.target.accessKey); 
    }

    const changeClass = () => {

        if(titlePage == screenType){
            return "active";
        }else{
            return "deactive";
        }
    }

    return(
        <li key={titlePage} className={'Navbar ' + changeClass() + ' ' + titlePage}>
            <button className="navbar-button" 
                    onClick={(event)=>{ screenSelection(event); changeClass();}} 
                    accessKey={titlePage}>{titlePage}</button>
        </li>
    );

    

}

NavBar.propTypes = {
    titlePage: propTypes.string.isRequired,
}