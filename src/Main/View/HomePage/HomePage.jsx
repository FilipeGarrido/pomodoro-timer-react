import React ,{useState}from  'react';
import './HomePage.scss'
import clock from '../../../images/clock.svg'

const HomePage = ()=>{
    
    const [text , setText] = useState("Hover Me")
    const welcome = "Welcome to Pomodoro Timer App"
    const hover = "Hover Me"
    const changeText = (text)=>{
        setText(text)
    }
    

    return(
        <div className="HomePage">
            <h1 onMouseOver={()=>changeText(welcome)} onMouseOut={()=>changeText(hover)}>{text}</h1>
            <div className="svg">
                <object type="image/svg+xml" data={clock}>svg-animation</object>
            </div>
        </div>
    )
}

export default HomePage;