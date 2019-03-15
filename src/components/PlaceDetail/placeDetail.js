import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {


    let modalContent = null;


    if (props.selectedPlaces) {

        modalContent = (

            <View>
                <Image source={props.selectedPlaces.image}
                    style={styles.placeImage}
                />
                <Text style={styles.placeText}>{props.selectedPlaces.name}</Text>
            </View>


        );
    }




    return (

        <Modal

            visible={props.selectedPlaces !== null}
            animationType="slide"
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <View style={styles.modelContainer}>
                {modalContent}
                <View style={styles.buttons} >
                 
                    <TouchableOpacity onPress={props.onDeleteHandler}>
                       <View style={styles.deleteIcon}>
                            <Icon
                                size={30}
                                name="ios-trash"
                                color="red"

                            />
                       
                       </View>
                        
                    </TouchableOpacity>
                    
                  
                </View>
                <View style={styles.closeButton}>
                    <Button title="Close"
                        onPress={props.onModalClose}
                    />
                </View>

            </View>

        </Modal>


    );
};


const styles = StyleSheet.create({

    modelContainer: {
        margin: 42
    },
    placeImage: {
        width: '100%',
        height: 200

    },
    closeButton: {
        marginTop: 10
    },
    placeText: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    deleteIcon:{
        alignItems:'center'
    }


});

export default placeDetail;