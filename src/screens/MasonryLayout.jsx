import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const data = [
  { key: "a", h: 50 },
  { key: "b", h: 100 },
  { key: "c", h: 50 },
  { key: "d", h: 100 },
  { key: "e", h: 50 },
  { key: "f", h: 100 },
  { key: "g", h: 50 },
  { key: "h", h: 100 },
  { key: "i", h: 50 },
  { key: "j", h: 100 },
  { key: "k", h: 50 },
  { key: "l", h: 100 },
  { key: "m", h: 50 },
  { key: "n", h: 100 },
  { key: "o", h: 50 },
  { key: "p", h: 100 },
  { key: "q", h: 50 },
  { key: "r", h: 100 },
  { key: "s", h: 50 },
  { key: "t", h: 100 },
  // ...
];

const numColumns = 3;

const Item = ({ item }) => (
  <View style={[styles.item, { height: item.h }]}>
    <Text>{item.key}</Text>
  </View>
);

const MasonryLayout = () => (
  <FlatList
    data={data}
    renderItem={Item}
    numColumns={numColumns}
    itemLayout={(data, index) => ({
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * index,
      index,
    })}
  />
);

const ITEM_WIDTH = 100;

const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    // height: ITEM_WIDTH,
    backgroundColor: "#333",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MasonryLayout;
