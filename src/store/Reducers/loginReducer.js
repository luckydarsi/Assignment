export const loginReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER': {
            console.log("from reducer", action.payload);
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        }
        case 'DELETE_USER': {
            return state
        }
        default: return state
    }
}