import React,{ useState , useEffect } from "react";
import PlayIcon from "../../images/play.png";
import PauseIcon from "../../images/pause.png";
import ResetIcon from "../../images/repeat.png";
import "./clock.scss";
import Display from "../Display/Display";
import Button from "../Button/Button";
import Alarm from "../../audio/despertadorEletronico.mp3";



export default function Clock({clockType, pomodoroValue, restValue}){
    
    const[started , setStarted] = useState(false);
    const[showTime, setShowTime]  = useState(''); 
    const[minutesCount , setMinutesCount] = useState(() => clockType == 'Pomodoro' ? pomodoroValue : restValue);
    const[secondsCount, setSecondsCount] = useState(0);
    const[tiks, setTiks] = useState(()=>clockType == 'Pomodoro' ? pomodoroValue*60 : restValue*60);
    const[finished, setFinished] = useState(false);
    const [alarmSound] = useState(new Audio(Alarm));
    
    const btnPressed = (btnType)=>{
        if(btnType == 'start'){
            setStarted(true);
        }if(btnType == 'pause'){
            setStarted(false);
        }if(btnType == 'reset'){
            clockType == 'Pomodoro' ? setMinutesCount(pomodoroValue) : setMinutesCount(restValue);
            clockType == 'Pomodoro' ? setTiks(pomodoroValue*60) : setTiks(restValue*60);
            setFinished(false)
            setStarted(false);    
            setSecondsCount(0);
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }
    }

    useEffect(()=>{
        clockType == 'Pomodoro' ? setMinutesCount(pomodoroValue) : setMinutesCount(restValue);
        clockType == 'Pomodoro' ? setTiks(pomodoroValue*60) : setTiks(restValue*60);
        setFinished(false);
        setSecondsCount(0);
        setShowTime(minutesCount+":"+('000' + secondsCount).slice(-2));
        setStarted(false);
        alarmSound.pause();
        alarmSound.currentTime = 0;

    },[clockType]);

    useEffect(()=>{

        const interval = setInterval(()=>{
        
            let seconds = secondsCount;
            let minutes = minutesCount;

            if(started){
                
                if(minutesCount>=0 && !finished){
                    seconds --;
                    setTiks(tiks - 1);
                    setSecondsCount(secondsCount - 1);
                    if(minutes>0){
                        if(seconds<0){
                            setMinutesCount(minutesCount -  1);
                            setSecondsCount(59);
                        }
                    }else{
                        if(seconds<0){
                            alarmSound.play();
                            console.log(alarmSound);
                            setFinished(true);
                            setMinutesCount(0);
                            setSecondsCount(0);
                        }
                    }
                    

                }
            }

            setShowTime(minutesCount+":"+('000' + secondsCount).slice(-2));

        },1000);

        return ()=> clearInterval(interval);
    });


    
    return(
        <div>
            <div className="timer-display">
                    <Display 
                    time={tiks}
                    setTime = {setTiks} 
                    showingTime={showTime} 
                    clockType={clockType} 
                    pomodoroValue={pomodoroValue}
                    restValue={restValue}/>
            </div>
            <div className="btns">
                <Button btnClass="start" btnTitle="Start" btnImage={PlayIcon} isPressed ={btnPressed} />
                <Button btnClass="pause" btnTitle="Pause" btnImage={PauseIcon} isPressed ={btnPressed} />
                <Button btnClass="reset" btnTitle="Reset" btnImage={ResetIcon} isPressed ={btnPressed} />
            </div>
        </div>
    );
    
   
}