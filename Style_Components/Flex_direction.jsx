//The previous lesson was flexbox.jsx

/*
There are other benifits for using a flexbot, like we can contorl
te direciotn of the childrens elements within the flexbox. 

the defualt direction of the flexbox in expo and react native is vertically

Here are the two differen tdireciton we can render the children elements:
- horizontal (row)
- vertical (column)

in addition here are the two properties we can use to control the direction:
- row renders children elemnts from left to right horizontally
- row-reverse renders children elements from right to left horizontally
- column renders children elements from top to bottom vertically (default)
- column-reverse renders children elements from bottom to top vertically

*/

// below is an example of flex box direction in action:
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
    <View style={[styles.box, { backgroundColor: 'blue' }]} />
    
  </View>
);

export default App;

// Get the maximum width/height (in dp) from the Dimensions API
const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#37789eff',

    // this is the highlight of the exercise
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    backgroundColor: 'black',
  },
});
