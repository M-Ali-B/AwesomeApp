import React from 'react';
import { Text,StyleSheet,View,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback ,Image} from "react-native";

const listItem = (props) =>(
    <TouchableOpacity 
    onPress={props.onItemPressed}>
<View style={styles.listItem} >

    <Text>{props.placeName}</Text>
    <Image 
    source={props.placeImage} 
    style={styles.placeImage}
    resizeMode="cover"
    />

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
},
    placeImage: {
        width: 60,
        height: 60
    }


});

