import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';

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
      <View style={styles.inputContainer}>
      
          <TextInput style={{ height: 40 ,width:250}}
            onFocus={(text) => this.setState({ text})}
            value={this.state.text}>

          </TextInput>
          <Button
            title="submit"
          ></Button>
        </View>

      </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection:'column',
    alignItems: 'center',  //on the cross-section
    justifyContent: 'center', // on the main-section
  },
  inputContainer:{
    // flex:1,
    backgroundColor:'green',
    flexDirection:'row',
    justifyContent:'space-between'
  },
 
});
