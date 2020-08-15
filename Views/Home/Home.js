import React, { useEffect, useState } from 'react';
import SingleRow from '../../Components/Card/SingleRow'
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default function Home(props) {

    //Use state to keep the click counts and array wich will used to play the game
    const [CARD_PARIS_VALUE, setCardParisValue] = useState([])
    const [count, setCount] = useState(0)

    //Common variabel to keep the rows and coloums
    const ROW_ARRY = [1, 2, 3, 4]
    const NO_OF_COLUMN = 3

    //Willmount/ First time will trigger when page load
    useEffect(() => {
        initiate()
    }, []);

    //Init function which will create length of 12 array
    const initiate = () => {
        var arr = [];
        while (arr.length < 6) {
            var r = Math.floor(Math.random() * 100) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        arr = [...arr, ...arr]
        arr = shuffle(arr)

        arr = arr.map((val) => {
            return {
                number: val,
                isShow: false,
                isDone: false
            }
        })
        setCount(0)
        setCardParisValue(arr)
    }
    //Common function to suffel the array
    const shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    //Handle the click event from child
    const handleSingleCard = (index) => {
        let countTMp = count
        countTMp += 1

        let tmp = CARD_PARIS_VALUE
        tmp[index].isShow = !tmp[index].isShow

        //Get the array which is clicked and not completed/not matched with the same number
        let tmp_2 = tmp.filter((val, mapIndex) => {
            if (val.isShow && !val.isDone) {
                let tTmp = val
                tTmp["index"] = mapIndex
                return tTmp
            }
        })

        //This condition will work when the filtered array from above reached the length of 2
        //Set the isShow and isDone variable based on the filtered array; when the first and second index of array's numbers are same then made the isShow and isDone as true otherwise both sould be false 
        if (tmp_2.length == 2) {
            if (tmp_2[0].number != tmp_2[1].number) {
                tmp[tmp_2[0].index].isShow = false
                tmp[tmp_2[1].index].isShow = false
            }
            else {
                tmp[tmp_2[0].index].isDone = true
                tmp[tmp_2[1].index].isDone = true
            }
        }

        //Used to check user has completed the full game or not
        let valueTmep = tmp.filter((val, index) => {
            return !val.isDone ? val : ""
        })
        
        //Show the alert message to user when all the card are flipped to front side
        if (valueTmep.length == 0) {
            Alert.alert(
                "congratulation",
                "You have completed the game",
                [
                    { text: "OK", onPress: () => initiate() }
                ],
                { cancelable: false }
            );

        }

        //Set the timeout event with 1sec if the two card were pressed only
        if (tmp_2.length >= 2) {
            setTimeout(() => {
                setCount(countTMp)
                setCardParisValue(tmp)
            }, 1000);
        }
        //If not then direclty update it to usestate variable
        else {
            setCount(countTMp)
            setCardParisValue([...tmp])
        }
    }

    return (
        <>
            <View style={styles.topView}>
                <TouchableOpacity onPress={e => initiate()}>
                    <View>
                        <Text style={styles.reSetButton}>Restart</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.steps}>STEPS:<Text style={styles.counterText}>{count}</Text></Text>
            </View>
            {

                ROW_ARRY.map((val, index) => (
                    //This single row component
                    <SingleRow key={index + new Date().getTime()} mainArray={CARD_PARIS_VALUE} lastIndex={val * NO_OF_COLUMN - 1} noOfColum={NO_OF_COLUMN} startIndex={val * NO_OF_COLUMN - 3} handleCardClickRow={e => handleSingleCard(e)}></SingleRow>
                ))
            }
        </>
    )
}
const styles = StyleSheet.create({
    //Top view style for restart button and steps
    topView: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    //Rest button style
    reSetButton: {
        color: '#35a7ff',
        fontSize: 20,
        paddingLeft: 30
    },
    //Counter text style
    counterText: {
        fontSize: 40,
        color: '#35a7ff',
    },
    //steps text style
    steps: {
        color: '#fff',
        paddingRight: 20,
        fontSize: 30
    }
})