import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const links = [
  { title: "Masonry Layout", screen: "Masonry" },
  { title: "Button Style", screen: "Button" },
];

const Index = ({ index }) => {
  return <Text>#{index + 1} </Text>;
};

const Lists = ({ navigation }) => {
  return (
    <View>
      {links.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.link}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.linkText}>
            <Index index={index} />
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  link: {
    backgroundColor: "#f7f8d7",
    padding: 20,
    borderRadius: 10,
    marginVertical: 4,
  },
  linkText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
