// React Navigate Drawer with Bottom Tab – Example using React Navigation V5 //
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer //
import React, { useState } from "react";
import {
  Button,
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const handlechange = () => {};
  const handleclick = () => {};
  const goToForgotPassword = () => {
    navigation.navigate("Forgot");

    // this.props.navigation.navigate("ForgotPassword");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <input
          type="textbox"
          placeholder="UserName"
          onChange={handlechange}
          value={username}
        />

        <br />
        <input
          type="textbox"
          placeholder="Password"
          onChange={handlechange}
          value={password}
        />
        {/* <Text onPress={() => alert("Hello")}>Forgot Password</Text> */}
        <View>
          <Text onPress={goToForgotPassword}>Forgot Password</Text>
        </View>
        <br />
        <View>
          <Button
            title="Submit"
            onPress={() => navigation.navigate("Profile", { name: "Jane" })}
          />
          {/* <Button onPress={handleclick} title="Submit" /> */}
        </View>
        <br />
        <br />
        <br />
        <br />
        <View>
          <Text style={styles.app}>
            CopyRight {"\u00A9"}2023.All Rights Reserved
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  app: {
    textAlign: "center"
  }
});
