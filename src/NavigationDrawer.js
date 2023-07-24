import * as React from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  console.log("navigation..", props);
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png"
          }}
          style={{ width: 25, height: 25, marginLeft: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function HomeScreenStack({ navigation }) {
  console.log("comes", navigation);

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Firt Page", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "white" //Set Header color
          },
          headerTintColor: "black", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold" //Set Header text style
          }
        }}
      />
    </Stack.Navigator>
  );
}

const NavigationDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={HomeScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavigationDrawer;
