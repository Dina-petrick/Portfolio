import { createContext, useReducer } from "react";

export const ThemeContext = createContext();


const INITAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
    switch(action.type){
        case "toggle" :
        return{darkMode: !state.darkMode};
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITAL_STATE);

    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}