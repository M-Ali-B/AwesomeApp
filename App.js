import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {



  
    state = {

      placeName: "",
      places: []

    };

    placeNameChangedHandler = (val) => {
      this.setState({
        placeName: val
      });
    };
    placeSubmitHandler = () => {
      if (this.state.placeName.trim() === "") {
        return false;
      }
      else if (this.state.places.indexOf(this.state.placeName.trim()) > -1){
        return alert( 'Option already used');
      }
      this.setState((prevState) => ({
        places: prevState.places.concat(prevState.placeName)
      }))
    }
  



  render() {
    const placesOutput = this.state.places.map((place,index) => (
      <Text key={index}>{place}</Text>
    ))
    return (



      <View style={styles.container}>
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
<View>{placesOutput}</View>
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
  inputContainer: {
    // flex:1,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '60%'
  },
  placeButton: {
    width: '30%'

  },

});


