import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ListItem from './src/component/Listitem/ListItem';
import PlaceInput from './src/component/PlaceInput/PlaceInput';
import PlaceList from './src/component/PlaceList/PlaceList';

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
  onItemDeleted = id => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, index) => id !== index)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
        placeName={this.state.placeName} 
        placeNameChangeHandler={this.placeNameChangeHandler}
        placeSubmitHandler={this.placeSubmitHandler}
         />
        <PlaceList 
        places={this.state.places} 
        onItemDeleted={this.onItemDeleted}
        />
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
  listContainer: {
    width: "100%"
  }
});
