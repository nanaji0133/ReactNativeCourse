/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,

  Text,
  View
} from 'react-native';



const App = () => {

  const [testColor, setTestColor] = useState("green");

  return (
    <>
      <View style={ styles.container }>
        <View style={ styles.half1 }>
        </View>
        <View style={ styles.half2 }>

        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  half1: {
    flex: 1,
    backgroundColor: "red"
  },
  half2:{
    flex:1,
    backgroundColor:"yellow"
  }
});

export default App;
