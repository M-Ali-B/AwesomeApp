import React from 'react';
import { Text,StyleSheet,View,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback } from "react-native";

const listItem = (props) =>(
    <TouchableOpacity onPress={props.onItemPressed}>
<View style={styles.listItem} >

    <Text>{props.placeName}</Text>

</View>
</TouchableOpacity>


);

export default listItem;

const styles = StyleSheet.create({

listItem:{
    width:'100%',
    padding:10,
    margin:1,
    backgroundColor:'#eee'
}


});

