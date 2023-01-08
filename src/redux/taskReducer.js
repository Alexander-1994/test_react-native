const InitialState = {                                                                    
	items: [],
	isLoading: true,
	isError: false
}

const taskReducer = (state = InitialState, action) => {                                             
	switch (action.type) {
		case 'FETCHING':
			return {
				...state,
				isLoading: true
			};
		case 'FETCHED':
			return {
				...state,
				items: action.payload,
				isLoading: false
			};
		case 'ERROR':
			return {
				...state,
				isError: true
			};
		case 'ADD':
			return {
				...state,
				items: [...state.items, action.payload] 
			};
		case 'DEL':
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload)
			};
		default:
			return state;
	}
} 

export default taskReducer;