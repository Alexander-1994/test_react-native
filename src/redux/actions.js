import { v4 as uuidv4 } from 'uuid';

export const taskFetching = () => ({type: 'FETCHING'});
export const taskFetched = data => ({type: 'FETCHED', payload: data});
export const taskError = () => ({type: 'ERROR'});
export const onAddTask = data => ({type: 'ADD', payload: {
    id: () => uuidv4(), task: data
}});
export const onDelTask = id => ({type: 'DEL', payload: id});

export const onEnter = data => ({type: 'ENTER', payload: data});
export const onPostLoading = () => ({type: 'POSTING'});
export const onPostLoaded = () => ({type: 'POSTED'});