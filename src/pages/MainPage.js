import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRequest } from '../customHooks/useRequest';
import Logo from '../assets/icons/Logo';
import Header from '../components/Header';
import Task from '../components/Task';
import Add from '../assets/icons/Add';

import { useSelector, useDispatch } from 'react-redux';
import { taskFetched, taskError, onDelTask } from '../redux/actions';

const MainPage = ({navigation}) => {
    const {get} = useRequest(),
          items = useSelector(state => state.taskReducer.items),
          isLoading = useSelector(state => state.taskReducer.isLoading),
          dispatch = useDispatch();

    const getTask = () => {
        get()
            .then(({data}) => {
                dispatch(taskFetched(data))
            })
            .catch(() => dispatch(taskError()))
    };

    useEffect(() => {
        getTask();
	}, [])

    if (isLoading) {
        return (
            <View style={styles.loadingWrapper}>
                <Logo />
                <ActivityIndicator size="large" color="red" style={styles.logo} />
            </View>
        )
    } 

    return (
        <View style={styles.container}>
            <Header />
            <FlatList 
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getTask} />}
                data={items} 
                renderItem={({item}) => {
                    return <Task task={item.task} />
            }} />
            <TouchableOpacity style={styles.createTask} onPress={() => navigation.navigate('creation')}>
                <Add />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: 45,
    },
    container: {
        paddingTop: 90,
        flex: 1,
		marginLeft: 'auto',
        marginRight: 'auto',
		marginVertical: 35
    },
    createTask: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    }
})

export default MainPage;