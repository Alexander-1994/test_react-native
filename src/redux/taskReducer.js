const InitialState = {                                                                    
	items: [],
	isLoading: true
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
		case 'ADD':
			return {
				...state,
				items: [...state.items, action.payload] 
			};
		case 'DEL':
			return {
				...state,
				items: state.items.filter(item => item.task !== action.payload)
			};
		default:
			return state;
	}
} 

export default taskReducer;