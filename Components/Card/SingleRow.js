import React from 'react';
import { View, Text } from 'react-native'
import Card from '../Card/SingleCard'

export default function Home({startIndex, lastIndex, mainArray, handleCardClickRow}) {
    let tmp = [1,2,3]
    return (
        < View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* <Text>Start{props.startIndex}</Text>
                <Text>End {props.lastIndex}</Text>
                <Text>Array {JSON.stringify(props.mainArray)}</Text>
                <Text>noOfColum {props.noOfColum}</Text> */}
                {/* <Text>Spliced one {JSON.stringify(props.mainArray.slice(props.startIndex, props.lastIndex + 1))}</Text> */}
                {/* {props.mainArray.slice(props.startIndex, props.lastIndex + 1).map((val, index)=>{
                    // <Card key={index}></Card>
                    <Text>dsjfkldsfsdlkf</Text>
                })} */}
                {mainArray.slice(startIndex, lastIndex + 1).map((val, index) => (
                    <Card key={index} number={val.number} isDone={val.isDone} isShow={val.isShow} index={mainArray.indexOf(val)} handleCardClick={e=> handleCardClickRow(e)}></Card>
                ))}
                {/* <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </View>
        </ View>
    )
}