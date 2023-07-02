//import liraries
import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Animated} from 'react-native';
import data from '../services/data';
// import {, Text, View} from 'react-native';   

// create a component
const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={{margin:20}}>Get started to test your knowledge</Text>
            <TouchableOpacity
                style={styles.buttonStart}
                onPress={() => {
                    navigation.navigate('Home')
                }
                }>
                <Text style={styles.buttonTxt}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonStart:{
        backgroundColor: 'black',
        paddingHorizontal: 5,
        paddingVertical: 15,
         width: '50%', borderRadius: 15,

    },
    buttonTxt:{
        textAlign: 'center', color: 'white', fontSize: 20,
   }
});

//make this component available to the app
export default Welcome;
