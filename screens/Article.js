import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Article extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> textInComponent666666 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
         color: 'coral'
    }
})
