import React,{useState, useEffect, useContext} from "react";
import {AppContext} from '../../data/Store'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./display.scss";

export default function Timer({time , showingTime}){

    const { screenType, workTime , shortRestTime, longRestTime } = useContext(AppContext)
    
    const [initValue,setInitValue] = useState(0);
    const [changeClass, setChangeClass]= useState(() => screenType == 'Work' ? 'pomodoro' : screenType == 'Long Rest' ? 'long-rest' : 'short-rest');

    useEffect(()=>{
        screenType == 'Work'? setInitValue(workTime*60) : screenType == 'Long Rest'? setInitValue(longRestTime*60) : setInitValue(shortRestTime*60);
        screenType == 'Work'? setChangeClass('pomodoro') : screenType == 'Long Rest' ? setChangeClass('long-rest') : setChangeClass('short-rest');
    },[screenType]) 

    let percentage = (time/initValue)*100;

    return(
        <div className="display">
            <CircularProgressbar 
                className={'display-circular '+changeClass}
                value={percentage}
                //strokeWidth ={50}
                percentage={percentage} 
                text={showingTime}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    textSize:'150%',
                })}/>
        </div>
    );

    
}