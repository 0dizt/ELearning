import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lists from "../components/Lists";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Lists navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
