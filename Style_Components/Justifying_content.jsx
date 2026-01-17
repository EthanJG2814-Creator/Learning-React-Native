// the previous exercise is flex_direction.jsx

/*
This section is Justifying content in React Native.

Another feature of flexbox is allowing us to contorl how the children elements
are positioned within our parent flexbox.

the property we use to control this is called justifyContent.

Here are examples of some elements:
- center: centers children elements along the main axis
- flex-start: aligns children elements to the start of the main axis
- flex-end: aligns children elements to the end of the main axis
- space-between: distributes children elements evenly along the main axis
- space-around: distributes children elements evenly with equal space around them
- space-evenly: distributes children elements evenly with equal space between them

*/

// here is the example of the justifyContent property in action:
import React from "react";
import { StyleSheet, View } from "react-native";

const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: "red" }]} />
    <View style={[styles.box, { backgroundColor: "green" }]} />
    <View style={[styles.box, { backgroundColor: "blue" }]} />
  </View>
);

export default App;

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    justifyContent: "space-evenly",
  },
  box: {
    backgroundColor: "black",
    height: 100,
  },
});
