//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import data from '../services/data';
import { COLORS } from '../constants/theme';

// create a component
const Results = ({navigation,route}) => {
  
    const [score, setScore] = useState(route.params.score)
    const allQuestions = data;

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: COLORS.primary,
                width: '90%',
                borderRadius: 20,
                padding: 20,
                alignItems: 'center'
            }}>
                <Text style={{color:COLORS.white,fontSize: 30}}>Your Score</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginVertical: 30
                }}>
                    <Text style={{
                        fontSize: 100,
                        color: COLORS.white,
                        fontWeight: 'bold'
                    }}>{score}</Text>
                    <Text style={{
                        fontSize: 100, color: COLORS.white,
                        fontWeight: 'bold'
                    }}> / { allQuestions.length }</Text>
                </View>
                {/* Retry Quiz button */}
                <TouchableOpacity
                onPress={()=>{
                    // restartQuiz();
                    navigation.navigate('Welcome');}}
                style={styles.btn}>
                    <Text style={{
                        textAlign: 'center', color: 'white', fontSize: 20
                    }}>Retry</Text>
                </TouchableOpacity>

            </View>

        </View>
    
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    btn:{
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 5,
        paddingVertical: 15,
         width: '50%',
          borderRadius: 15,
    }
});

//make this component available to the app
export default Results;
