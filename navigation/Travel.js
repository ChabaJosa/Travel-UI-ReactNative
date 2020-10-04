import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../screens/List";
import Article from "../screens/Article";

const { Navigator, Screen } = createStackNavigator();

export default function Travel() {
  return (
    <Navigator
      headerMode="screen"
      initialRouteName="List"
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          borderBottomColor: "transparent",
          // marginTop: 24, // Apparently margin isn't doing anything for the header style here
          backgroundColor: "green",
        },
      }}
    >
      <Screen name="List" component={List} />
      <Screen name="Article" component={Article} />
    </Navigator>
  );
}
