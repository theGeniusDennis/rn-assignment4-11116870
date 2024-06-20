// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import LoginScreen from './screens/LoginScreen';
import Homepage from './screens/Homepage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/PoppinsRegular-B2Bw.otf"),
    "Poppins-Medium": require("./assets/fonts/PoppinsMedium-1JPv.otf"),
    "Poppins-SemiBold": require("./assets/fonts/PoppinsSemibold-8l8n.otf"),
    "Poppins-Bold": require("./assets/fonts/PoppinsBold-GdJA.otf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Homepage} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
