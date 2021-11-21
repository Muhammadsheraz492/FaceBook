import React from "react";
import { View, Text, KeyboardAvoidingView, Image } from "react-native";

import Facebook from "../Svges/Facebook.svg";
const Splash = props => {
  setTimeout(() => {
    props.navigation.replace("Home");
  }, 1000);
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

      {/* <View
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Text>From</Text>
        <View style={{ height: 50 }} />
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            // height: "20%",
          }}
        >
          <Image
            style={{ width: 50, height: 30 }}
            source={require("../Svges/metaimage.png")}
          />
          <Text> met</Text>
        </View>
      </View> */}
    </View>
  );
};

export default Splash;
