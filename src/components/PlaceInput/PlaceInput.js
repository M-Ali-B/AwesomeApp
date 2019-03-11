import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component{
    
    state = {
        placeName:""
    };
    
    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        });
    };


    placeSubmitHandler = (props) => {
        if (this.state.placeName.trim() === "") {
            return alert("Can't Submit Empty");
        }
        else if (this.props.places.indexOf(this.state.placeName.trim()) > -1) {
            return alert('Option already used');
        }
        this.props.onPlaceAdded(this.state.placeName);
    }

render(){

    return(


        <View style={styles.inputContainer}>

            <TextInput style={{ height: 40, width: 150 }}
                onChangeText={this.placeNameChangedHandler}
                value={this.state.placeName}
                style={styles.placeInput}
                placeholder="Name your places!"
            >
            </TextInput>
            <Button
                title="submit"
                style={styles.placeButton}
                
                onPress={this.placeSubmitHandler}
            ></Button>
        </View>
    );
}

}


const styles = StyleSheet.create({
    inputContainer: {
        // flex:1,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: "60%"
    },
    placeButton: {
        width: "20%"


    },
});


export default PlaceInput;