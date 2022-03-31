import React from 'react';
import {Link , useRouteMatch} from  'react-router-dom'
import './Menu.scss'

const Menu = () =>{



    return (
        <div className='Menu'>
            <nav>
                <ul>
                    <li>
                        <MenuLink   activeOnlyWhenExact={true} 
                                    to="/"
                                    label="Home Page"/>
                    </li>
                    <li>
                        <MenuLink   to="/clock"
                                    label="Pomodoro Clock"/>
                    </li>
                    <li>
                        <MenuLink   to="/config"
                                    label="Configurations"/>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (

        <Link className={match ? "active" : ""} to={to}> {match && "> "} {label}</Link>

    );
  }

export default Menu;