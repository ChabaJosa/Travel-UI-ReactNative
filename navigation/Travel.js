import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../screens/List";
import Article from "../screens/Article";

const { Navigator, Screen } = createStackNavigator();

export default function Travel() {
  return (
    <Navigator headerMode="none">
      <Screen name="List" component={List} />
      <Screen name="Article" component={Article} />
    </Navigator>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//     <AuthStack />
//   </NavigationContainer>
//   );
// }

// const AppNavigator = () => (
//   <NavigationContainer>
//     <AuthStack />
//   </NavigationContainer>
// );

// export default Travel;
