const InitialState = {                                                                    
    value: '',
    isLoadingValue: false
  }
  
const fieldReducer = (state = InitialState, action) => {                                             
    switch (action.type) {
        case 'ENTER':
            return {
                ...state,
                value: action.payload
            };
        case 'POSTING':
            return {
                ...state,
                isLoadingValue: true
            };
        case 'POSTED':
            return {
                value: '',
                isLoadingValue: false
            };
        default:
            return state;
        }
    } 
  
  export default fieldReducer;