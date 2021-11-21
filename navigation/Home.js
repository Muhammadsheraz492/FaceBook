import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../Screens/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Group from "../Screens/Group";
const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
    // screenOptions={{
    //   tabBarLabelStyle: { fontSize: 12 },
    //   tabBarItemStyle: { width: 100 },
    //   tabBarStyle: { backgroundColor: "powderblue" },
    // }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          // tabBarLabel: "Home",
          tabBarShowLabel: false,
          activeTintColor: "yellow",
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "blue" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Group"
        component={Group}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="group"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          activeTintColor: "yellow",
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "blue" : "yellow"} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          activeTintColor: "yellow",
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "blue" : "yellow"} />
          ),
        }}
      /> */}

      {/* <Tab.Screen name="Second" component={Second} /> */}
    </Tab.Navigator>
  );
};

export default Home;
