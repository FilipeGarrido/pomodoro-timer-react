import React,{useState, useEffect} from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./display.scss";

export default function Timer({time , showingTime, clockType, pomodoroValue, restValue}){

    const [initValue,setInitValue] = useState(0);
    const [changeClass, setChangeClass]= useState(() => clockType == 'Pomodoro' ? 'pomodoro' : 'rest');

    useEffect(()=>{
        clockType == 'Pomodoro'? setInitValue(pomodoroValue*60) : setInitValue(restValue*60);
        clockType == 'Pomodoro'? setChangeClass('pomodoro') : setChangeClass('rest');
    }) 

    let percentage = (time/initValue)*100;

    return(
        <div className="display">
            <CircularProgressbar 
                className={'display-circular '+changeClass}
                value={percentage} 
                percentage={percentage} 
                text={showingTime}
                styles={buildStyles({
                    textSize:'150%',
                })}/>
        </div>
    );

    
}