import React, { Component } from 'react';
import {StyleSheet, View, Text , Dimensions, TouchableOpacity , Animated} from 'react-native'

export default function Card(props){
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text>Testing</Text>
            </View>
        </View>
    )
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width:screenWidth/3 -10,
        height: screenHeight/4 - 40,
        backgroundColor: 'green',
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 10
    }
})