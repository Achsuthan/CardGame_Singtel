import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Animated, } from 'react-native'

export default function Card({ number, isShow, handleCardClick, index, isDone }) {
    const [localIsShow, setLocalIsShow] = useState(false)
    useEffect(() => {
        setLocalIsShow(isShow)
    },
        [])

    const selfHandler = () => {
        if (!isDone) {
            handleCardClick(index)
            setLocalIsShow(!localIsShow)
        }
    }

    return (
        <TouchableOpacity onPress={e => selfHandler()} disabled={isDone}>
            {localIsShow ? (<Animated.View style={styles.cardFront}>
                <View style={styles.cardContent}>
                    <Text style={styles.textFront}>{localIsShow ? number : '?'}</Text>
                </View>
            </Animated.View>) : (<Animated.View style={styles.cardBack}>
                <View style={styles.cardContent}>
                    <Text style={styles.textBack}>{localIsShow ? number : '?'}</Text>
                </View>
            </Animated.View>)}


        </TouchableOpacity>

    )
}

let screenWidth = Math.round(Dimensions.get('window').width);
let  screenHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({
    cardBack: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        borderRadius: 6,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: screenWidth / 3 - 10,
        height: screenHeight / 4 - 90,
        borderColor: "#fff",
        borderWidth: 5,
        backgroundColor: '#35a7ff',
    },
    cardFront: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        borderRadius: 6,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: screenWidth / 3 - 10,
        height: screenHeight / 4 - 90,
        borderColor: "#fff",
        borderWidth: 5,
        backgroundColor: '#fff',
    },
    cardContent: {
        textAlign: "center",
        marginHorizontal: 18,
        marginVertical: 10,
    },
    textBack: {
        textAlign: "center",
        fontSize: 50,
        color: "#fff",

    },

    textFront: {
        textAlign: "center",
        fontSize: 50,
        color: "#000",

    }
})