import React , {useState} from "react";

//Estado inicial/default da aplicação
const initialState = {
    screenType:"Work",
    workTime:30,
    restTime:5
}

//Exporta o estado inicial para o hook useContext
export const AppContext = React.createContext(initialState)

//Componente que passa os parametros para toda minha aplicação para o uso do useContext
const Store = (props) =>{
    
    //Chama o estado inicial e armazena num estado genérico utilizando o hook useState
    const [state,setState] = useState(initialState)

    //Função para alterar os estados anteriormente armazenados
    function updateState (key, value){
        setState({
            ...state,
            [key]: value
        })
    }

    return(
        <AppContext.Provider value={{
            screenType:state.screenType,
            workTime:state.workTime,
            restTime:state.restTime,
            setScreenType: st => updateState('screenType',st),
            setWorkTime: t => updateState('workTime',t),
            setRestTime: t => updateState('restTime',t),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store