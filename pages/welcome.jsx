//import liraries
import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Animated} from 'react-native';
import data from '../services/data';
// import {, Text, View} from 'react-native';   

// create a component
const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home')
                }
                }>
                <Text>Start</Text>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Welcome;
