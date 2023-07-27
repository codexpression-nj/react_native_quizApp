//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';
import { LinearGradient } from "expo-linear-gradient";
import categorie from '../services/categorie';

const Item = ({ title,onPress}) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.itemContainer}
    >
        <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
);
// create a component
const Categories = ({navigation}) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={categorie}
                renderItem={
                    ({ item }) => <Item title={item.name} 
                        onPress={() =>{
                            navigation.navigate('Home')
                        }}
                    />
                }
                keyExtractor={(item) => item.id}
            />
        </View>


    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.backgroundColour
    },
    itemContainer: {
        borderRadius: 20,
        padding: 20,
        marginVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        backgroundColor:'#46736E'
    },
    itemText: {
        color: "white",
        fontWeight:'100',
        fontSize:18
    },
});

//make this component available to the app
export default Categories;
