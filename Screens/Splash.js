import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SvgUri } from "react-native-svg";
import Google from "../Svges/google-icon.svg";
const Splash = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Google width={120} height={40} />
      </View>
    </View>
  );
};

export default Splash;