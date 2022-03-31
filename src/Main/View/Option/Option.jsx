import React,{ useContext } from "react";
import ReactSlider from 'react-slider';
import "./option.scss";
import {AppContext} from '../../../data/Store'

export default function Options(){

    const {workTime , restTime, setWorkTime , setRestTime} = useContext(AppContext)

    return(
        <div className="options">
            <h1>Time Configurations:</h1>
            <label className="options-label">Work time: {workTime}:00</label>
            <ReactSlider 
                className="slider-pomodoro"
                thumbClassName="thumb"
                thumbActiveClassName="thumb-active"
                trackClassName="track"
                value={workTime}
                onChange={(newValue) => setWorkTime(newValue) }
                min={1}
                max={120}
            />
            <label className="options-label">Rest time: {restTime}:00</label>
            <ReactSlider 
                className="slider-rest"
                thumbClassName="thumb"
                trackClassName="track"
                value={restTime}
                onChange={(newValue)=>setRestTime(newValue)}
                min={1}
                max={120}
            />
        </div>
    )
}