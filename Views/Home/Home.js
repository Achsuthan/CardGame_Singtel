import React, { useEffect, useState } from 'react';
import SingleRow from '../../Components/Card/SingleRow'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function Home(props) {
    const [CARD_PARIS_VALUE, setCardParisValue] = useState([])
    const [count, setCount] = useState(0)

    const ROW_ARRY = [1, 2, 3, 4]
    const NO_OF_COLUMN = 3

    useEffect(() => {
        initiate()
    }, []);

    useEffect(() => {

    }, [])

    const initiate = () => {
        var arr = [];
        while (arr.length < 6) {
            var r = Math.floor(Math.random() * 100) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        arr = [...arr, ...arr]
        arr = shuffle(arr)

        arr = arr.map((val, index) => {
            return {
                number: val,
                isShow: false,
                isDone: false
            }
        })
        setCount(0)
        setCardParisValue(arr)
    }


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

    const handleSingleCard = (index) => {
        let countTMp = count
        countTMp += 1

        console.log(index)
        let tmp = CARD_PARIS_VALUE
        tmp[index].isShow = !tmp[index].isShow
        // setCardParisValue([...tmp])


        let tmp_2 = tmp.filter((val, mapIndex) => {
            if (val.isShow && !val.isDone) {
                let tTmp = val
                tTmp["index"] = mapIndex
                return tTmp
            }
        })
        console.log("test2", tmp_2)
        if (tmp_2.length >= 2) {
            if (tmp_2[0].number != tmp_2[1].number) {
                tmp[tmp_2[0].index].isShow = false
                tmp[tmp_2[1].index].isShow = false
            }
            else {
                console.log(tmp_2)
                tmp[tmp_2[0].index].isDone = true
                tmp[tmp_2[1].index].isDone = true
            }
        }

        let valueTmep = tmp.filter((val, index) => {
            return !val.isDone ? val : ""
        })
        console.log("valueTmep", valueTmep)
        if (valueTmep.length == 0) {
            console.log("done")
            alert("you completed")
        }

        console.log("test2", tmp_2)
        if (tmp_2.length >= 2) {
            setTimeout(() => {
                setCount(countTMp)
                setCardParisValue(tmp)
            }, 1000);
        }
        else {
            setCount(countTMp)
            setCardParisValue([...tmp])
        }

    }

    const isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
      };

    const getNewDimensions = (event) =>{
        return {
            screenWidth: Math.round(Dimensions.get('window').width),
            screenHeight: Math.round(Dimensions.get('window').height)
        }
      }

    return (
        <>
            <View style={styles.topView} onLayout={(e)=> getNewDimensions(e)}>
                <TouchableOpacity onPress={e => initiate()}>
                    <View>
                        <Text style={styles.reSetButton}>Restart</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.steps}>STEPS:<Text style={styles.counterText}>{count}</Text></Text>
            </View>
            {

                ROW_ARRY.map((val, index) => (
                    <SingleRow key={index + new Date().getTime()} mainArray={CARD_PARIS_VALUE} lastIndex={val * NO_OF_COLUMN - 1} noOfColum={NO_OF_COLUMN} startIndex={val * NO_OF_COLUMN - 3} handleCardClickRow={e => handleSingleCard(e)}></SingleRow>
                ))
            }
        </>
    )
}
const styles = StyleSheet.create({
    topView: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    reSetButton: {
        color: '#35a7ff',
        fontSize: 20,
        paddingLeft: 30
    },
    counterText: {
        fontSize: 40,
        color: '#35a7ff',
    },
    steps: {
        color: '#fff',
        paddingRight: 20,
        fontSize: 30
    }
})