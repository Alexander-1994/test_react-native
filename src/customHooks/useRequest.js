import { useCallback } from "react";
import axios from "axios";
import { Alert } from "react-native";

const _url = 'https://63b7dd824d97e82aa3c7c3e3.mockapi.io/testDB';
const _error = 'К сожалению, возникла непредвиденная ошибка на сервере. Попробуйте позже';

export const useRequest = () => {
    const get = useCallback(async () => {
        try {
            const res = await axios.get(_url);
            return res;
        } catch (error) {
            console.log(error);
            Alert.alert('Ошибка', _error);
        }
    }, []);
    
    const post = useCallback(async (data) => {
        try {
            const res = await axios.post(_url, {task: data});
            return res;
        } catch (error) {
            console.log(error);
            Alert.alert('Ошибка', _error);
        }
    }, []);

    return {get, post}
};