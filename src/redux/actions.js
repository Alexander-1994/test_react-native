let newId = 1000;

export const taskFetching = () => ({type: 'FETCHING'});
export const taskFetched = data => ({type: 'FETCHED', payload: data});
export const onAddTask = data => ({type: 'ADD', payload: {id: newId++, task: data}});
export const onDelTask = task => ({type: 'DEL', payload: task});

export const onEnter = data => ({type: 'ENTER', payload: data});
export const onPostLoading = () => ({type: 'POSTING'});
export const onPostLoaded = () => ({type: 'POSTED'});