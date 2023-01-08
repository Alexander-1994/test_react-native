import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { onEnter } from '../redux/actions';

const Field = () => {
    const value = useSelector(state => state.fieldReducer.value),
          dispatch = useDispatch();

    return (
        <TextInput style={styles.field}
                   value={value} 
                   keyBoardType="text"
                   placeholder="Текст новой задачи"
                   onChangeText={e => dispatch(onEnter(e))} />
    )
} 

const styles = StyleSheet.create({
    field: {
        width: 334,
        minHeight: 44,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 8,
        paddingHorizontal: 13,
        paddingVertical: 8,
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 28,
        color: '#222F3E',
    }
})

export default Field;