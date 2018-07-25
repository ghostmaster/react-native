import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ListItem from './src/component/Listitem/ListItem';
import PlaceInput from './src/component/PlaceInput/PlaceInput';

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
    const places = this.state.places.map((place, index) => {
      return <ListItem 
      key={index} 
      placeName={place} 
      onItemPressed={() => this.onItemDeleted(index)}/>;
    });
    return (
      <View style={styles.container}>
        <PlaceInput 
        placeName={this.state.placeName} 
        placeNameChangeHandler={this.placeNameChangeHandler}
        placeSubmitHandler={this.placeSubmitHandler}
         />
        <ScrollView style={styles.listContainer}>
         {places}
        </ScrollView>
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
