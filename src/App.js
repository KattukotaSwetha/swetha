import * as React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
      {/* Rest of your app code */}
    </NavigationContainer>
  );
};

export default App;
