import React from "react";

import Providr from "./navigation";
import { SafeAreaView } from "react-native-safe-area-context";

import store from "./Redux/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Providr />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
