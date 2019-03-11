import React from 'react';
import { Text, StyleSheet, View } from "react-native";

import ListItem from '../ListItem/ListItem'
const placeList = props => {
    const placesOutput = props.places.map((place, index) => (
        <ListItem key={index} placeName={place}
            onItemPressed={() => alert("item pressed - ID :" + index)}

        />
    ))
   
    return(

        <View style={styles.listContainer}>{placesOutput}</View>

    );
};

export default placeList;

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    },
})