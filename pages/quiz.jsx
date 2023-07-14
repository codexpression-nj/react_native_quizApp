//import liraries
import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import data from '../services/data';
import { ScrollView } from 'react-native';

// create a component
const Quiz = ({ navigation }) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0)
    
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })
    const validateAnswer = (selectedOption,navigation) => {
        if (isOptionsDisabled == false){
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            setScore(score+1)
        }
        }else{
            handleNext(navigation)
        }
    }
    const handleNext = (navigation) => {
        if(currentQuestionIndex== allQuestions.length-1){
            navigation.navigate('Result',{score: score});
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
        }
        Animated.parallel([
            Animated.timing(progress, {
            
                toValue: currentQuestionIndex+2,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.sequence([
                Animated.timing(fadeAnim,{
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false
                }),
                Animated.timing(fadeAnim,{
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false})
              ])
        ]).start();
    }
    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            })
        ]).start();


        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 2000,
            useNativeDriver: false,
        }).start();

    }

    useEffect(() => {
        startQuiz()
    }, []);

    const renderOptions = (navigation) => {
        return (
            <View style={{marginTop:100}}>
                
                {
                    allQuestions[currentQuestionIndex]?.options.map((option,index) => (
                        <Animated.View 
                            key={index}
                            style={{opacity:fadeAnim, 
                            transform: [{
                               translateY: fadeAnim.interpolate({
                                 inputRange: [0, 1],
                                 outputRange: [150 / 4 *(index+10), 0]  // 0 : 150, 0.5 : 75, 1 : 0
                               }),
                             }],
                               }} >
                       <TouchableOpacity 
                        onPress={()=> validateAnswer(option,navigation)}
                        key={option}
                        style={{backgroundColor:
                            isOptionsDisabled ?
                            option==correctOption 
                            ? 'green'
                            : option==currentOptionSelected 
                            ? 'red'
                            : 'grey'
                            : 'orange',
                            borderRadius: 5,
                            alignItems: 'center', 
                            justifyContent: 'center',
                            padding: 10,
                            paddingHorizontal: 30,
                            marginVertical: 10,
                            shadowColor: '#171717',
                            shadowOffset: {width: -3, height: 3},
                            shadowOpacity: 0.2,
                            shadowRadius: 3, }}> 
                            <Text style={{fontSize: 15, color: 'white', textAlign: 'center',} } >{option}</Text>
                        </TouchableOpacity> 
                        </Animated.View>
                    ))
                }
             
            </View>
        )
    }
    return (
        <ScrollView style={styles.scrollView}>
        <View style={{
                //  flex: 1,
                 paddingVertical: 50,
                 paddingHorizontal: 30,
                 backgroundColor: '#141A33',
                 position:'relative',
             }}>
          <View style={{
              marginTop: 50,
                marginVertical: 10,
                padding: 40,
                // borderTopRightRadius: 40,
                borderRadius: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                shadowColor: '#171717',
                shadowOffset: {width: -6, height: 6},
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}>
            {/* Progress Bar */}
            <View style={{
                width: '80%',
                height: 6,
                borderRadius: 5,
                backgroundColor: '#2c3e50',
                marginBottom: 10

            }}>
                <Animated.View style={[{
                    height: 5,
                    borderRadius: 5,
                    // backgroundColor: COLORS.accent+'90'
                },{
                    width: progressAnim
                }]}>
                </Animated.View>
            </View>
            {/* Question */}
            <View>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                
                }}>
                    <Text style={{color: 'black', fontSize: 15, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: 'black', fontSize: 13, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>
        
                {/* Question */}
                <Text style={{
                    color: 'black',
                    fontSize: 18,
                    textAlign: 'center', 
                    
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        </View>
      {renderOptions(navigation)}
        </View>
        </ScrollView> 
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
export default Quiz;
