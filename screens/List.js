import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const List = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Hello from ListJS </Text>
        <Button
          title="Go to Article"
          style={styles.button}
          onPress={() => navigation.navigate("Article")}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "coral",
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
});

export default List;