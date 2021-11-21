import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../Screens/HomeScreen";
import StoreScreen from "../Screens/StoreScreen";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Group from "../Screens/Group";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Profile from "../Screens/Profile";
import Notification from "../Screens/Notification";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Menu from "../Screens/Menu";
const Tab = createMaterialTopTabNavigator();

const Home = ({ navigation }) => {
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
            <Entypo name="home" size={20} color={focused ? "blue" : "black"} />
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
              size={20}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="store"
              size={20}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user-circle-o"
              size={20}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="bell-alt"
              size={20}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              name="menu"
              size={20}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />

      {/* <Tab.Screen name="Second" component={Second} /> */}
    </Tab.Navigator>
  );
};

export default Home;
