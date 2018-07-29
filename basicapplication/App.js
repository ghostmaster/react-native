import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PlaceInput from './src/component/PlaceInput/PlaceInput';
import PlaceList from './src/component/PlaceList/PlaceList';
import placeImage from './src/assets/boats.jpg';
import PlaceDetail from './src/component/PlaceDetail/PlaceDetail';
export default class App extends React.Component {
    state = {
        placeName: '',
        places: [],
        selectedPlace: null
    };

    placeNameChangeHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.setState(prevState => {
            return {
                places: prevState.places.concat({
                    placeName: prevState.placeName,
                    key: Math.random(),
                    image: placeImage,
                    imageFromWeb: {
                        uri:
                            'https://www.worldatlas.com/r/w728-h425-c728x425/upload/cd/02/30/shutterstock-575368690.jpg'
                    }
                })
            };
        });
    };
    placeSelectedHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => place.key === key)
            };
        });
    };

    onItemDeletedHandler = () => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key),
                selectedPlace: null
            };
        });
    };

    onModalCloseHandler = () => {
        this.setState({
            selectedPlace: null
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    onItemDeletedHandler={this.onItemDeletedHandler}
                    onModalCloseHandler={this.onModalCloseHandler}
                />
                <PlaceInput
                    placeName={this.state.placeName}
                    placeNameChangeHandler={this.placeNameChangeHandler}
                    placeSubmitHandler={this.placeSubmitHandler}
                />
                <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
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
        justifyContent: 'flex-start'
    },
    listContainer: {
        width: '100%'
    }
});
