import React from 'react';
import {StyleSheet,Text, View} from 'react-native'
import Card from '../../Components/Card/Card'

export default function Home(props){
    return (
        < View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </View>
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: 'green',
    },
    wrapper: {
      marginVertical: 10, alignItems: 'center'
    }
  });