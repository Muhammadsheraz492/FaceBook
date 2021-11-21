import React from "react";
import Splash from "../Screens/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../navigation/Home";
import LiveRecording from "../Screens/LiveRecording";
import CreatePostScreen from "../Screens/CreatePostScreen";
const Stack = createNativeStackNavigator();
const AppStak = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <Stack.Screen name="LiveRecording" component={LiveRecording} />
    </Stack.Navigator>
  );
};

export default AppStak;
