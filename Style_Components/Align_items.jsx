// the previous exercise was justifying_content.jsx

/*
In this section we continue to talk about  more properties we can do with Flexbox in React Native.

the property is alignItems

this determines hwo children are aligned along the cross acis of a container, the
axis is perpendicular  to the main xis which is set by the flexDirection property.

example, if the flexDirection is row, the main axis is horizontal, 
the cross axis runs verticallly and vice versa. 

Here are some of the available syntaxses with aligntItems:
- stretch: stretches children elements to fill the container along the cross axis (default)
- center: centers children elements along the cross axis
- flex-start: aligns children elements to the start of the cross axis
- flex-end: aligns children elements to the end of the cross axis
- baseline: aligns children elements along their text baselines


*/

// here is an example of alignItems in action:
import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
    <View style={[styles.box, { backgroundColor: 'blue' }]} />
  </View>
);

export default App;

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'black',
    height: 100,
    width: 100,
  },
});
