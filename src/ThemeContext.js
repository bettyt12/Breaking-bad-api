import React from 'react'

export const themes = {
    dark:{
        color: 'white',
        background : "black",
    },
    light:{
        color: 'black',
        background : 'rgb(142, 168, 134)',
    },
}

const ThemeContext= React.createContext(themes.dark)

export default ThemeContext;