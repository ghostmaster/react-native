import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PlaceInput from './src/component/PlaceInput/PlaceInput';
import PlaceList from './src/component/PlaceList/PlaceList';
import placeImage from './src/assets/boats.jpg';

export default class App extends React.Component {
    state = {
        placeName: '',
        places: []
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
                    value: prevState.placeName,
                    image: placeImage,
                    imageFromWeb: {
                        uri:
                            'https://www.worldatlas.com/r/w728-h425-c728x425/upload/cd/02/30/shutterstock-575368690.jpg'
                    }
                })
            };
        });
    };
    onItemDeleted = id => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter((place, index) => id !== index)
            };
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceInput
                    placeName={this.state.placeName}
                    placeNameChangeHandler={this.placeNameChangeHandler}
                    placeSubmitHandler={this.placeSubmitHandler}
                />
                <PlaceList places={this.state.places} onItemDeleted={this.onItemDeleted} />
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
