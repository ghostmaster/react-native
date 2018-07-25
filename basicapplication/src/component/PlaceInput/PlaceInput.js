import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const placeInput = props => (
    <View style={styles.inputContainer}>
          <TextInput
          style={styles.placeInput}
            placeholder="Awesome Place"
            value={props.placeName}
            onChangeText={props.placeNameChangeHandler}
          />
          <Button 
          style={styles.placeButton}
          onPress={props.placeSubmitHandler}
          title="ADD"/>
    </View>
);

const styles = StyleSheet.create({
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
})

export default placeInput;