// import React, { useState } from "react";
// import { useColorScheme } from 'react-native';

// export const ThemeContext = React.useContext();


// export const ThemeProvider = (props) => {

//     const deviceTheme = useColorScheme();

//     const themeDefault = themes[deviceTheme] || themes.dark;

//     const [theme, setTheme] = useState(themeDefault);

//     return (
//         <ThemeContext.Provider value={{theme, setTheme}}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }