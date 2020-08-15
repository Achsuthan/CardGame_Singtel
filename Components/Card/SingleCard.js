import React, {useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'

export default function Card({ number, isShow, handleCardClick, index, isDone }) {
    //Local variable to handle the isShow
    const [localIsShow, setLocalIsShow] = useState(false)

    //Willmount/ first time will trigger this and assging the props value to local state value
    useEffect(() => {
        setLocalIsShow(isShow)
    },
        [])

    //Click handler function wich will handle if the card is already filiped with same value it wont trigger otherwise trigger the parent
    const selfHandler = () => {
        if (!isDone) {
            handleCardClick(index)
            setLocalIsShow(!localIsShow)
        }
    }

    return (
        <TouchableOpacity onPress={e => selfHandler()} disabled={isDone}>
            {localIsShow ? (<View style={[styles.cardFront, styles.card]}>
                <View style={styles.cardContent}>
                    <Text style={styles.textFront}>{localIsShow ? number : '?'}</Text>
                </View>
            </View>) : (<View style={[styles.cardBack , styles.card]}>
                <View style={styles.cardContent}>
                    <Text style={styles.textBack}>{localIsShow ? number : '?'}</Text>
                </View>
            </View>)}
        </TouchableOpacity>

    )
}

//Screen widh and height
let screenWidth = Math.round(Dimensions.get('window').width);
let  screenHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({
    card:{
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
    },
    //Back card style
    cardBack: {
        backgroundColor: '#35a7ff',
    },
    //front card style
    cardFront: {
        
        backgroundColor: '#fff',
    },
    //card content style
    cardContent: {
        textAlign: "center",
        marginHorizontal: 18,
        marginVertical: 10,
    },
    //Text back style
    textBack: {
        textAlign: "center",
        fontSize: 40,
        color: "#fff",

    },
    //Test front style
    textFront: {
        textAlign: "center",
        fontSize: 40,
        color: "#000",

    }
})