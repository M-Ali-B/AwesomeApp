import React from 'react';
import { Text, StyleSheet, View,ScrollView,FlatList } from "react-native";
import ListItem from '../ListItem/ListItem'


const placeList = props => {
   
   
    return(

        <FlatList 
        style={styles.listContainer} 
        data = {props.places}
    renderItem = {(info) => (
    
        <ListItem 
         placeName={info.item.value}
        onItemPressed={() => props.onItemDeleted(info.item.key)}

        />)}
        />

    );
};

export default placeList;

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    },
})