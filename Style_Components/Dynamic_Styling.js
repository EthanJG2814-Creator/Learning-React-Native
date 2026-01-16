/*
The previous lesson was style_merging

this lesson is Dynamic Styling in React Native.

StyleSheet API limitation is that the styles are statics, but dynamic stylling 
solbe this by allowing our UI to respond to real time changes.

using styl merging with react state we can dynamically override style properties.

here is an example of a dynamic stlyle property:

const NightModeBox = ({ nightMode }) => (
 <View style={[styles.box, nightMode && { backgroundColor: 'black' }]} />
);

const styles = StyleSheet.create({
 box: {
 width: 100,
 height: 100,
 backgroundColor: 'blue',
 },
});

In the eaxmple above, the NightModeBox component takes a nightMode prop is true.
The background coloris overriden to black. 

another common technique for dynamic styling is suing the ternary operator to chose
between two distint style objects. This is useful when we want to switch between
two comple styles based on a condition. such as light and dark themes. 

const NightModeBox = ({ nightMode }) => (
 <View style={[
 styles.box,
 { backgroundColor: nightMode ? 'black' : 'blue' }
 ]} />
);

const styles = StyleSheet.create({
 box: {
 width: 100,
 height: 100,
 // backgroundColor is now set conditionally in the component
 },
});

*/

//Below is an exercise example of how we can manually overide styles dynamically
import React from "react";
import { StyleSheet, View } from "react-native";

const App = () => (
  <View style={styles.layout}>
    <BoxOne />
    <BoxTwo />
  </View>
);

export default App;

export const BoxOne = (props) => {
  return <View style={[styles.redBox, props.isActive && styles.blueBox]} />;
};
/*
Above we create a constant called BoxOne that recieves information from its parent,
this information is known as props. now the styles enclosed is as follows:
always make it red (styles.redbox) but if the parent said isActive is true,
then also make it blue (props.isActive && styles.blueBox)
*/


export const BoxTwo = (props) => (
  <View style={props.isActive ? styles.blueBox : styles.redBox} />
);

// how to read:
//condition ? valueIfTrue : valueIfFalse


/*
create a constant called boxtow that recieve informaiton (props) from its 
parent Appy a style of blue if the parent sad is active is true, otherwise apply red style.
*/

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  redBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "white",
  },

  blueBox: {
    width: 150,
    height: 150,
    backgroundColor: "blue",
  },
});

/*
I did not understand this exercise well enough to explain it clearly. I will be using AI
to help me understand, specifically Perplexity AI on Research mode.
that 

what is props.isActive in this code?
is a boolean value (true or false) passed from a parent component to a child component.

So where is props.isActive being set or defined?
since props.isActive is not defined it behaves like false boolean in these conditions
to actually make props.isActive true we would need to modify the parent component such as:

const App = () => (
  <View style={styles.layout}>
    <BoxOne isActive={true} />   { isActive prop = true }
    <BoxTwo isActive={false} />  { isActive prop = false }
  </View>
);


*/ 