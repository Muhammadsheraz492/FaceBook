import React from "react";
import Splash from "../Screens/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../navigation/Home";
const Stack = createNativeStackNavigator();
const AppStak = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStak;
