import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/ListPlace/PlaceList';
import placeImage from './src/assests/x-team.jpg';
import PlaceDetail from './src/components/PlaceDetail/placeDetail';
import {connect} from 'react-redux';

import {addPlace,deletePlace,selectPlace,deselectPlace} from './src/store/actions/index';
 class App extends React.Component {
  

  placeAddedHandler = placeName => {
   this.props.onAddPlace(placeName,placeImage);
   console.log('Place added');
  };

  ModalCloseHandler = () =>{
   this.props.onDeselectPlace();

  }

  placeDeleteHandler = () => {
  this.props.onDeletePlace();

  }
  placeSelectedHandler = index => {
    
    this.props.onSelectPlace(index);

  }





  render() {

    return (



      <View style={styles.container}>
        <View style={styles.appNameSection}>
          <Text style={styles.appName}>Awesome Location App</Text>
        </View>
        <PlaceDetail 
        selectedPlaces={this.props.selectedPlaces} 
          onDeleteHandler={this.placeDeleteHandler}
          onModalClose = {this.ModalCloseHandler}
        
        />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler}
          places={this.props.places}

        />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',  //on the cross-section
    justifyContent: 'center', // on the main-section
  },

  appNameSection: {

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  appName: {
    fontWeight: 'bold'


  },

  listContainer: {
    width: '100%'
  },
});


const mapStateToProps = state=> {// use initialState props in store 
  return {
places:state.places.places,
selectedPlaces:state.places.selectedPlaces

  };
};


const mapDispatchToProps = dispatch => {
  return {
onAddPlace: (placeName,placeImage) => dispatch(addPlace(placeName,placeImage)),
onDeletePlace:() => dispatch(deletePlace()),
onSelectPlace:(index) => dispatch(selectPlace(index)),
onDeselectPlace:() => dispatch(deselectPlace())


  };
}


export default connect(mapStateToProps,mapDispatchToProps)(App);