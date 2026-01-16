/*
Instead of  repeating the same method we did
in Styling_react.js we will use someting called
a StyleSheet API, where we can werite our styling rules seprately
and refrence them when rendering components. 

This is similar to how CSS works in web development.

The most critial method with Styleshee is the
create() method, which makes StyleSheet object that we 
can pass to our components to store our styling rules. 

some styling properties require objects instead of plain number of strings.
sycg as shadowOffset, which needs width and height properties

*/

// here is the practice done using StyleSheet API

import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <View style={styles.card} />
    <View style={styles.card} />
  </View>
);
/*
biggest downides of the stylesheet API is that our styles
are statics. we cnat change the styling based on user interaction from our 
style create method. 
*/

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 0.3 },
  },
});

export { styles };
export default App;

//This code is Completed! From the exercise.