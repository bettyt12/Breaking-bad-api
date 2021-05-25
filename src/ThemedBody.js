import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'

const ThemedBody = () => {
    const theme=useContext(ThemeContext);
    return ( 
        <div style={theme}>

        </div>
     );
}
 
export default ThemedBody;