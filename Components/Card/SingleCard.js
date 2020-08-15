import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Animated, } from 'react-native'

export default function Card({ number, isShow, handleCardClick, index, isDone }) {
    const [localIsShow, setLocalIsShow] = useState(false)
    let animatedValue = new Animated.Value(0)
    let value = 0
    let frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    })
    let backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    })
    useEffect(() => {
        animatedValue = new Animated.Value(0);
        value = 0;
        animatedValue.addListener(({ value }) => {
            value = value;
        })
        frontInterpolate = animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        backInterpolate = animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })

        // if (isShow) {
        //     Animated.spring(animatedValue, {
        //         toValue: 0,
        //         friction: 8,
        //         tension: 10
        //     }).start();
        // } else {
        //     Animated.spring(animatedValue, {
        //         toValue: 180,
        //         friction: 8,
        //         tension: 10
        //     }).start();
        // }

        setLocalIsShow(isShow)
    },
        [])

    const selfHandler = () => {
        if (!isDone) {
            handleCardClick(index)
            setLocalIsShow(!localIsShow)
        }
    }

    const frontAnimatedStyle = {
        transform: [
            { rotateY: frontInterpolate }
        ]
    }
    const backAnimatedStyle = {
        transform: [
            { rotateY: backInterpolate }
        ]
    }


    return (
        <TouchableOpacity onPress={e => selfHandler()} disabled={isDone}>
            {localIsShow ? (<Animated.View style={frontAnimatedStyle, styles.cardFront}>
                <View style={styles.cardContent}>
                    <Text style={styles.textFront}>{localIsShow ? number : '?'}</Text>
                    <Text style={styles.textFront}>{number}</Text>
                </View>
            </Animated.View>) : (<Animated.View style={backAnimatedStyle, styles.cardBack}>
                <View style={styles.cardContent}>
                    <Text style={styles.textBack}>{localIsShow ? number : '?'}</Text>
                </View>
            </Animated.View>)}


        </TouchableOpacity>

    )
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


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