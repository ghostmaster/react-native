import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/component/Listitem/ListItem';

export default class App extends React.Component {
  state ={
    placeName: '',
    places: []
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    } 
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    const places = this.state.places.map((place, index) => {
      return <ListItem key={index} placeName={place} />;
    });
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.placeInput}
            placeholder="Awesome Place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button 
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
          title="ADD"/>
        </View>
        <View style={styles.listContainer}>
         {places}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    width: "100%",
    alignItems:"center",
    justifyContent:'space-between'
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
