/*
This section is Style merging in React Native'

This come after Style_Sheets.js.

In the previous section we learned about StyleSheet API, which allows us to define styles
resue styles enchanicn readability and maintainability of our code.
*/

/*
In react we can apply multiple styles to a component by passing an array of style objects
to the style prop. This is useful when we want to combine different styles 
based on certain conditions
or when we want to override specific style properties.

here is an example:
<View style={[styles.box, styles.red]} />

react native will apply the arrage of styles from left to right, with 
the right most taking precedence and overriding any conflicting properties.

<View style={[styles.box, { borderRadius: 10 }]} />
git 

This exercise will override any conflicting styles from styles.box.

*/
import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <Box />
  </View>
);

export default App;

export const Box = () => (
  <View style={[styles.box, {backgroundColor: "blue"}]} />
);

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});