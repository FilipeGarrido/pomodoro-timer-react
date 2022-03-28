import React , {useState} from 'react';
import './App.scss'
import Header from './components/Header/Header'
import Clock from './components/Clock/Clock'
import Options from './components/Option/Option';

function App() {
  
  const[typeTimer , setTypeTimer] = useState('Pomodoro');
  const[pomodoroValue , setPomodoroValue] = useState(30);
  const[restValue , setRestValue] = useState(5);

  const screenSelector = (type) =>{
    setTypeTimer(type)
  };

  const seeValue = (event)=>{
    console.log(event);
  }
  return (
    <div className="App">
      <Header screenSelector={screenSelector} screenType={typeTimer}/>
      { typeTimer != 'Options' ? 
        <Clock 
          clockType={typeTimer}
          pomodoroValue={pomodoroValue} 
          restValue={restValue} /> : 
        <Options 
          pomodoroValue={pomodoroValue} 
          restValue={restValue} 
          changePomodoroValue={setPomodoroValue}
          changeRestValue={setRestValue}/>
      }
      
    </div>
  );
}

export default App
