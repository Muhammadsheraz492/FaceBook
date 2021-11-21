import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react";
import Providr from "./navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Providr />
    </SafeAreaView>
  );
};

export default App;
