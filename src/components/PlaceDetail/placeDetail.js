import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native';


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
                    <Button title="Delete"  color="red"
                    onPress={props.onDeleteHandler}
                    
                    />
                    {/** style attribute does not work in button aso have to sandwitch button in different views  */ }
                  
                    </View>
                    <View  style={styles.closeButton}>  
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
    placeImage:{
        width:'100%',
        height:200
        
    },
    closeButton:{
        marginTop:10
    },
    placeText:{
        fontWeight:'bold',
        textAlign:'center'
    },
    
    
});

export default placeDetail;