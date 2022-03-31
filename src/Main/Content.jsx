import React , {useState , useContext} from 'react';
import { Switch , Route} from 'react-router-dom';
import './Content.scss'
import Header from './View/Header/Header'
import Clock from './View/Clock/Clock'
import Options from './View/Option/Option'
import HomePage from './View/HomePage/HomePage';


const Content = () =>{

    return (
        <main className='Content'>
            <div >
                <Switch>
                    <Route path='/config'>
                        <Options />
                    </Route>
                    <Route path='/clock'>
                        <Header />
                        <Clock />
                    </Route>
                    <Route path='/'>
                        <HomePage/>
                    </Route>
                </Switch>

            </div>
        </main>     
    )
}

export default Content;