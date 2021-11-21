import React from "react";
import Splash from "../Screens/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const AppStak = () => {
  {
    console.log("djfnhdf");
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default AppStak;
