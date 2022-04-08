import React,{ useContext } from "react";
import ReactSlider from 'react-slider';
import "./option.scss";
import {AppContext} from '../../../data/Store'

export default function Options(){

    const {workTime , shortRestTime , longRestTime , setWorkTime , setShortRestTime , setLongRestTime } = useContext(AppContext)

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
            <label className="options-label">Short Rest time: {shortRestTime}:00</label>
            <ReactSlider 
                className="slider-rest short"
                thumbClassName="thumb"
                trackClassName="track"
                value={shortRestTime}
                onChange={(newValue)=>setShortRestTime(newValue)}
                min={1}
                max={120}
            />
            <label className="options-label">Long Rest time: {longRestTime}:00</label>
            <ReactSlider 
                className="slider-rest long"
                thumbClassName="thumb"
                trackClassName="track"
                value={longRestTime}
                onChange={(newValue)=>setLongRestTime(newValue)}
                min={1}
                max={120}
            />
        </div>
    )
}