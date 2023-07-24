import * as React from "react";
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute
} from "@react-navigation/native";
import ForgotPassword from "./ForgotPassword";
import { Image, TouchableOpacity, View, Text } from "react-native";
import ListPage from "./ListPage";
const Stack = createStackNavigator();

const MyStack = ({ navigation }) => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e" //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold" //Set Header text style
        }
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ route }) => ({
          headerLeft: () => (
            <Image
              source={{ uri: "https://reactjs.org/logo-og.png" }}
              style={{ width: 40, height: 40 }}
            />
          )
        })}
      />
      <Stack.Screen name="Forgot" component={ForgotPassword} />

      <Stack.Screen name="ListPage" component={ListPage} />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),

          // headerLeft: () => (
          //   <Image
          //     source={{ uri: "https://reactjs.org/logo-og.png" }}
          //     style={{ width: 40, height: 40 }}
          //   />
          // ),
          headerStyle: {
            backgroundColor: "#f4511e" //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold" //Set Header text style
          }
        })}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default MyStack;

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "LoginScreen":
      return "Login";
    case "ProfileScreen":
      return "Profile";
    case "ListPage":
      return "ListPage";
  }
}
