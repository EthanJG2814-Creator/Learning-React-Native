/*
You know how the screen cane even change shpae when the device is rotated?

some elements like buttons dont always need to verresponsive in size, but many other 
components benefit from responsive sizing usign percentage
vaalues rather than fixed dimensions.

the best way to create a responsive layout in react native is with flexbox.

All elements are flex containers by default in react native.

Tto make layouts dynamic we use the flex property. this allows child 
components to expand or shirk to fill available spaces along the main axis. 

Here is an example of flexbox in action:

<View style={styles.layout}>
 <View style={[styles.box, { flex: 1, backgroundColor: 'magenta' }]} />
 <View style={[styles.box, { flex: 1, backgroundColor: 'orange' }]} />
 <View style={[styles.box, { flex: 1, backgroundColor: 'magenta' }]} />
</View>

Above each field receives an equal share of available space. each height is 
calculated by dividing the available space by the sum of the flex
factors. 

we can also change the factor for one or more child elements to 
adjust their size relative to the others. for example:

<View style={styles.layout}>
 <View style={[styles.box, { flex: 1, backgroundColor: 'magenta' }]} />
 <View style={[styles.box, { flex: 2, backgroundColor: 'orange' }]} />
 <View style={[styles.box, { flex: 1, backgroundColor: 'magenta' }]} />
</View>

the yellow box has a flex value of 2, while the others have 1.
the aavailable space is divided into 4 equal parts (1+2+1=4). so flex 1
children get 25% while flex 2 gets 50%.

*/


// I will continue to show the flexbox exercise below, but
// it does not make sense to me still, so lets move on. 


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
    backgroundColor: '#e5e5e5',
  },
  box: {
    flex: 1,
    backgroundColor: 'black',
  },
});