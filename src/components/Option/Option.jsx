import React,{ useState , useEffect } from "react";
import ReactSlider from 'react-slider';
import "./option.scss";

export default function Options({pomodoroValue, restValue, changePomodoroValue, changeRestValue}){
    return(
        <div className="options">
            <label className="options-label">Work time: {pomodoroValue}:00</label>
            <ReactSlider 
                className="slider-pomodoro"
                thumbClassName="thumb"
                thumbActiveClassName="thumb-active"
                trackClassName="track"
                value={pomodoroValue}
                onChange={(newValue)=>changePomodoroValue(newValue)}
                min={1}
                max={120}
            />
            <label className="options-label">Rest time: {restValue}:00</label>
            <ReactSlider 
                className="slider-rest"
                thumbClassName="thumb"
                trackClassName="track"
                value={restValue}
                onChange={(newValue)=>changeRestValue(newValue)}
                min={1}
                max={120}
            />
        </div>
    )
}