import React from 'react';
import { Modal, View, Button, Image, Text, StyleSheet } from 'react-native';

const placeDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.imageFromWeb} style={styles.image} />
                <Text style={styles.placeName}>{props.selectedPlace.placeName}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalCloseHandler} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                <View>
                    {modalContent}
                    <Button title="Delete" color="red" onPress={props.onItemDeletedHandler} />
                    <Button title="Close" onPress={props.onModalCloseHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    image: {
        height: 50,
        width: 50
    },
    placeName: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center'
    }
});

export default placeDetail;
