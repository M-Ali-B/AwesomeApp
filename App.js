import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/ListPlace/PlaceList';


export default class App extends React.Component {
    state = {

     
      places: []

    };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };
    
  



  render() {
    
    return (



      <View style={styles.container}>
<View style={styles.appNameSection}>
          <Text style={styles.appName}>Awesome Location App</Text>
</View>
      
      <PlaceInput  
          onPlaceAdded = {this.placeAddedHandler}
      />
      <PlaceList 
      places={this.state.places}
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
  
  appNameSection:{
    
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  appName:{
    fontWeight:'bold'
    

  },

  listContainer:{
    width:'100%'
  },
});


