import * as React from 'react'
import {Text, View, TouchableOpacity } from 'react-native';
import {StyleSheet} from 'react-native';

interface Props {}

const styles = StyleSheet.create({
    counterStyle:{
        fontSize: 25,
        color: "red",
        fontWeight: "500",
    },
    boldStyle:{
        fontWeight: "bold"
    }
});

 
let count = 0;

export const Counter : React.FC<Props> = () => {

    const [counter, setcounter] = React.useState(0);  //to increment (memory for component)

        return (
            <View>
                <Text style={styles.counterStyle}>Ini adalah counter</Text>
                <Text style={[styles.counterStyle, styles.boldStyle]}> 
                    {counter}
                </Text>
                <TouchableOpacity onPress={
                    () => {
                        setcounter(counter +1);
                        count = count +1 ;
                        console.log(count);
                    }}
                >
                    <Text>Increment</Text>
                </TouchableOpacity>
            </View>
        );
};
