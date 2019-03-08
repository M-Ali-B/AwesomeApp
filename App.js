import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default class App extends React.Component {
  


constructor(props) {
  super(props);
  this.state = {

    text: 'please write something'

  };
}
  render() {
    return (
      
      
      
      <View style={styles.container}>
 <TextInput style={{height:40,width:100}} 
 onFocus={(text) =>this.setState({text:''})}
 value={this.state.text}>
 
 </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection:'column',
    alignItems: 'flex-start',  //on the cross-section
    justifyContent: 'flex-start', // on the main-section
  },
 
});
