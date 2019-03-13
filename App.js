import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/ListPlace/PlaceList';
import placeImage from './src/assests/x-team.jpg';
import PlaceDetail from './src/components/PlaceDetail/placeDetail';



export default class App extends React.Component {
  state = {


    places: [],
    selectedPlaces: null

  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({

          key: Math.random().toString(),
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  ModalCloseHandler = () =>{
    this.setState({

      selectedPlaces: null

    });

  }

  placeDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlaces.key;
        }),

        selectedPlaces: null

      }})

  }
  placeSelectedHandler = index => {
    
    this.setState(prevState => {
      return {
        selectedPlaces: prevState.places.find(places => {
          return places.key === index;
        })
      }
    })

  }





  render() {

    return (



      <View style={styles.container}>
        <View style={styles.appNameSection}>
          <Text style={styles.appName}>Awesome Location App</Text>
        </View>
        <PlaceDetail 
        selectedPlaces={this.state.selectedPlaces} 
          onDeleteHandler={this.placeDeleteHandler}
          onModalClose = {this.ModalCloseHandler}
        
        />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler}
          places={this.state.places}

        />
        <PlaceList
          places={this.state.places}
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


