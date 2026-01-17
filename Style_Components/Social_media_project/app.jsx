/*
In this project, we have been given the skeleton for a social media app.
with some premade components , and its ourjob to take the applicaiton and finish it b
by styling it. 

we are gigven three files, App.tsx, post.tsx, and card.tsx.

Our job is to make our social media app look visually appealing by adding styles to the components.

lets start
*/

import React from "react";
import { ScrollView, Text, View, StyleSheet} from "react-native";

import Card from "./card";
import Post from "./Post";
import data from "./data/data"; // where is data stored in this exercise??
import type { User, Post as PostType, Featured } from "./data/data";

const HomeScreen = () => (
  <ScrollView>
    <Text style = {[styles.title]}>Stories</Text>
    <ScrollView horizontal>
      {(data.users as User[]).map((user) => (
        <Card key={user.id} avatar={user.avatar} name={user.name} />
      ))}
    </ScrollView>
    <Text style = {styles.title}>Featured</Text>
    {(data.featured as Featured[]).map((post) => (
      <Post
        key={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
        friend={post.friend}
      />
    ))}

    <Text style = {styles.title}>My Feed</Text>
    {(data.posts as PostType[]).map((post) => (
      <Post
        key={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
        friend={post.friend}
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  title:{
    color: "blue",
    fontSize: 30,
    fontFamily: "Verdana",
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
})

const App = () => (
  <View style={{ flex: 1,  backgroundColor: '#37789eff' }}>
    <HomeScreen />
  </View>
);

export default App;
