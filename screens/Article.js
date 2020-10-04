import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Article = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello from ArticleJS</Text>
      <Button
        title="Go to List"
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

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
    paddingHorizontal: 12,
  },
});

export default Article;
