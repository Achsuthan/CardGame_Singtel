import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Animated } from 'react-native'

export default function Card({ number, isShow, handleCardClick, index, isDone }) {

    const selfHandler = ()=>{
        if(!isDone){
            handleCardClick(index)
        }
    }


    return (
        <TouchableOpacity onPress={e=> selfHandler()} disabled={isDone}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>{isShow ? number : '?'}</Text>
                    <Text style={styles.text}>{number}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: screenWidth / 3 - 10,
        height: screenHeight / 4 - 90,
        backgroundColor: '#35a7ff',
        borderColor: "#fff",
        borderWidth: 5,
    },
    cardContent: {
        textAlign: "center",
        marginHorizontal: 18,
        marginVertical: 10,
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        color: "#fff",

    }
})