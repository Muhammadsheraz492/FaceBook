import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SvgUri } from "react-native-svg";
import Facebook from "../Svges/Facebook.svg";
const Splash = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          // marginTop: 350,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Facebook width="25%" height={"35%"} />
      </View>

      <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <Text style={{ justifyContent: "flex-end" }}>met</Text>
      </View>
    </View>
  );
};

export default Splash;
