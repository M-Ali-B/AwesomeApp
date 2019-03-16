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
                                name="md-trash"
                                color="red"

                            />
                       
                       </View>
                        
                    </TouchableOpacity>
                    
                  
                </View>
                <View style={styles.closeButton}>
<<<<<<< HEAD
                    <TouchableOpacity onPress={props.onModalClose}>
                        <View style={styles.closeIcon}>
                            <Icon
                                size={30}
                                name="md-close-circle-outline"
                                color="black"

                            />

                        </View>

                    </TouchableOpacity>
=======
                    <Button title="Close"
                        onPress={props.onModalClose}
                    />
>>>>>>> 2ec2778ab4cf75c58809e74551e2d3c0d955f576
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
<<<<<<< HEAD
    },
    closeIcon:{
        alignItems:'center'
=======
>>>>>>> 2ec2778ab4cf75c58809e74551e2d3c0d955f576
    }


});

export default placeDetail;