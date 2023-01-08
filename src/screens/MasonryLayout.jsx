import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";

const data = [
  { key: "a", height: 300 },
  { key: "b", height: 500 },
  { key: "c", height: 300 },
  { key: "d", height: 500 },
  { key: "e", height: 300 },
  { key: "f", height: 500 },
  // ...
];

const Item = ({ item, index }) => (
  <View style={[styles.item, { height: item.height }]}>
    <Text style={styles.text}>
      {item.key}
      {index}
    </Text>
  </View>
);

const MasonryLayout = () => (
  <>
    <MasonryList
      data={data}
      keyExtractor={(item) => item.key}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={Item}
    />
  </>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#F570C9",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
  },
});

export default MasonryLayout;
