import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Back from '../assets/icons/Back';

const BackBtn = () => {
    return (
        <View style={styles.backWrapper}>
            <Back />
            <Text style={styles.text}>Вернуться назад</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    backWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 334,
    },
    text: {
        fontWeight: '500',
        fontSize: 28,
        lineHeight: 33,
        color: '#999999',
        marginLeft: 30
    }
})

export default BackBtn;