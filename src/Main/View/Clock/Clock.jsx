import React,{ useState , useEffect , useContext } from "react";
import {AppContext} from '../../../data/Store'
import PlayIcon from "../../../images/play.png";
import PauseIcon from "../../../images/pause.png";
import ResetIcon from "../../../images/repeat.png";
import "./clock.scss";
import Display from "../../../components/Display/Display";
import Button from "../../../components/Button/Button";
import Alarm from "../../../audio/despertadorEletronico.mp3";



export default function Clock(){

    const { screenType, workTime , shortRestTime, longRestTime } = useContext(AppContext)
    
    const[started , setStarted] = useState(false);
    const[showTime, setShowTime]  = useState(''); 
    const[minutesCount , setMinutesCount] = useState(() => screenType == 'Work' ? workTime : screenType == 'Long Rest' ? longRestTime: shortRestTime);
    const[secondsCount, setSecondsCount] = useState(0);
    const[tiks, setTiks] = useState(()=>screenType == 'Work' ? workTime*60 : screenType == 'Long Rest' ? longRestTime*60 : shortRestTime*60);
    const[finished, setFinished] = useState(false);
    const[alarmSound] = useState(new Audio(Alarm));
    
    const btnPressed = (btnType)=>{
        if(btnType == 'start'){
            setStarted(true);
        }if(btnType == 'pause'){
            setStarted(false);
        }if(btnType == 'reset'){
            screenType == 'Work' ? setMinutesCount(workTime) : screenType == 'Long Rest' ? setMinutesCount(longRestTime): setMinutesCount(shortRestTime);
            screenType == 'Work' ? setTiks(workTime*60) : screenType == 'Long Rest' ? setTiks(longRestTime*60): setTiks(shortRestTime*60);
            setFinished(false)
            setStarted(false);    
            setSecondsCount(0);
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }
    }

    useEffect(()=>{
        screenType == 'Work' ? setMinutesCount(workTime) : screenType == 'Long Rest' ? setMinutesCount(longRestTime): setMinutesCount(shortRestTime);
        screenType == 'Work' ? setTiks(workTime*60) : screenType == 'Long Rest' ? setTiks(longRestTime*60): setTiks(shortRestTime*60);
        setFinished(false);
        setSecondsCount(0);
        setShowTime(minutesCount+":"+('000' + secondsCount).slice(-2));
        setStarted(false);
        alarmSound.pause();
        alarmSound.currentTime = 0;

    },[screenType]);

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
                    showingTime={showTime} 
                    />
            </div>
            <div className="btns">
                <Button btnClass="start" btnTitle="Start Button" btnImage={PlayIcon} isPressed ={btnPressed} active={started}/>
                <Button btnClass="pause" btnTitle="Pause Button" btnImage={PauseIcon} isPressed ={btnPressed} active={started} />
                <Button btnClass="reset" btnTitle="Reset Button" btnImage={ResetIcon} isPressed ={btnPressed} active={started} />
            </div>
        </div>
    );
    
   
}