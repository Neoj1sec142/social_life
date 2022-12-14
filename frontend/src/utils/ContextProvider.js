import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext()

const initialState = {
    chat: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [dashboard, setDashboard] = useState(0)
    const [time, setTime] = useState(5)
    // const [screenSize, setScreenSize] = useState(undefined)
    // const [currentColor, setCurrentColor] = useState('#03C9D7')
    // const [currentMode, setCurrentMode] = useState('Light')
    // const [themeSettings, setThemeSettings] = useState(false)
    // const setMode = e => {
    //     setCurrentMode(e.target.value)
    //     localStorage.setItem('themeMode', e.target.value)
    //     setThemeSettings(false)
    // }
    // const setColor = e => {
    //     setCurrentColor(e)
    //     localStorage.setItem('colorMode', e)
    //     setThemeSettings(false)
    // }
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return(
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            dashboard,
            setDashboard,
            time,
            setTime,
            // screenSize, 
            // setScreenSize,
            // currentColor,
            // currentMode,
            // setColor,
            // setMode,
            // themeSettings, setThemeSettings
        }}>{children}</StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)