import React from "react";
import { Button, Text } from "react-native";
import ListPage from "./ListPage";
import ForgotPassword from "./ForgotPassword";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const ProfileScreen = ({ navigation, route }) => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#c6cbef", //Set Drawer background
          width: 250 //Set Drawer width
        },
        headerStyle: {
          backgroundColor: "#f4511e" //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold" //Set Header text style
        }
      }}
    >
      <Drawer.Screen
        name="Forgot"
        options={{ drawerLabel: "Home Screen Option" }}
        component={ListPage}
      />
      <Drawer.Screen
        name="ListPage"
        options={{ drawerLabel: "Setting Screen Option" }}
        component={ForgotPassword}
      />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};
export default ProfileScreen;
