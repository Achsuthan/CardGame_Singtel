import React from 'react';
import { View, Text } from 'react-native'
import Card from '../Card/SingleCard'

export default function Home({ startIndex, lastIndex, mainArray, handleCardClickRow }) {
    let tmp = [1, 2, 3]
    return (
        < View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {mainArray.slice(startIndex, lastIndex + 1).map((val, index) => (
                    <Card key={index} number={val.number} isDone={val.isDone} isShow={val.isShow} index={mainArray.indexOf(val)} handleCardClick={e => handleCardClickRow(e)}></Card>
                ))}
            </View>
        </ View>
    )
}