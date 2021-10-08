import React, {useState} from 'react'

import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Stack/MainStack';

import themes from './src/styles/theme'

export default () => {

  const deviceTheme = useColorScheme();

  const themeDefault = themes[deviceTheme] || themes.dark;

  const [theme, setTheme] = useState(themeDefault);

  return (

    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ThemeProvider>
  )

}



