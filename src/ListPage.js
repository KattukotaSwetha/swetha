// React Navigate Drawer with Bottom Tab – Example using React Navigation V5 //
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer //
import * as React from "react";
import { Button, View, Text, SafeAreaView, ScrollView } from "react-native";
import { data } from "./data";
import Cards from "./Card";
const ListPage = ({ navigation }) => {
  console.log(data.products);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {data.products.map((data, index) => (
            <View>
              <Cards imgUrl={data.img} name={data.name} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPage;
