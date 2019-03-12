import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native';




const placeDetail = props => {


    let modalContent = null;


    if (props.selectedPlaces) {

        modalContent = (

            <View>
                <Image source={props.selectedPlaces.placeImage} />
                <Text>{props.selectedPlaces.placeName}</Text>
            </View>


        );
    }




    return (

        <Modal visible={props.selectedPlaces !== null} animationType="slide">
            <View styles={style.modelContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" />
                    <Button title="Close" />
                </View>
            </View>

        </Modal>


    );
};


const style = StyleSheet.create({

    modelContainer: {
        margin: 42
    },

});

export default placeDetail;