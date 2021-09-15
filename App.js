import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./src/screens/signup";
import Signin from "./src/screens/signin";
import { UserProvider } from "./src/Context/userContext";

const navigator = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <navigator.Navigator initialRouteName="Signup">
        <navigator.Screen name="Signup" component={Signup} />
        <navigator.Screen name="Signin" component={Signin} />
      </navigator.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
};
