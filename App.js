/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './Views/Home/Home'
import {StyleSheet,Text, SafeAreaView} from 'react-native'

const App: () => React$Node = () => {
  return (
    <>
     <SafeAreaView style={styles.container}>
      <Home></Home>
    </SafeAreaView>
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
