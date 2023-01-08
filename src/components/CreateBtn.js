import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CreateBtn = ({text}) => {
    const value = useSelector(state => state.fieldReducer.value);
    
    return (
        <View 
            style={[styles.btn, value.length === 0 ? {backgroundColor: 'rgba(34, 47, 62, 0.5)'} : {backgroundColor: '#222F3E'}]}
            >
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 16,
        width: 334,
        height: 44,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 28,
        color: '#FFFFFF',
    }
})

export default CreateBtn;