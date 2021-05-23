import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme,darkTheme} from './themes'

function Theme() {
    const [theme,setTheme]=useState("light");

    const themeToggler=()=>{
        theme ==='light' ? setTheme("dark"): setTheme("light");
    }
    return (
        <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
            <div>
                gfhjdkslk
            </div>

        </ThemeProvider>
    //     <div>
    //        <div>
    //            <span style={{color:'yellow'}}>🎇</span>
    //            <span style={{color:'grey'}}>🌙</span>
    //            </div> 
    //     </div>
    )
}



export default Theme
