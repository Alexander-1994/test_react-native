import React from 'react';
import { useRequest } from '../customHooks/useRequest';
import { useSelector, useDispatch } from 'react-redux';
import { onAddTask, onPostLoading, onPostLoaded } from '../redux/actions';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import BackBtn from '../components/BackBtn';
import Field from '../components/Field';
import CreateBtn from '../components/CreateBtn';

const CreationPage = ({navigation}) => {
    const {post} = useRequest(),
          value = useSelector(state => state.fieldReducer.value),
          isLoadingValue = useSelector(state => state.fieldReducer.isLoadingValue),
          dispatch = useDispatch();

    const createTask = value => {
        if (value.length > 0) {
            dispatch(onPostLoading());

            post(value).then(() => {
                dispatch(onAddTask(value));
                dispatch(onPostLoaded());
            })
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('home')}>
                <BackBtn />
            </TouchableOpacity>
            <Field style={styles.field} />
            <TouchableOpacity onPress={() => createTask(value)} disabled={isLoadingValue || value.length === 0}>
                <CreateBtn text="Добавить" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
		marginLeft: 'auto',
        marginRight: 'auto',
		marginVertical: 35
    },
    back: {
        position: 'absolute',
        top: 0,        
    },
})

export default CreationPage;