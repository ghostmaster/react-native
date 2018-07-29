import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ListItem from '../Listitem/ListItem';

const PlaceList = props => {
    const placeName = props.places.map((place, index) => {
        return (
            <ListItem
                key={index}
                placeName={place.value}
                placeImage={place.image}
                placeImageFromWeb={place.imageFromWeb}
                onItemPressed={() => props.onItemDeleted(index)}
            />
        );
    });
    return <ScrollView style={styles.listContainer}>{placeName}</ScrollView>;
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlaceList;
