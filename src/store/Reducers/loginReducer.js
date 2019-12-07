import {
    Login_Store_InputValue,
} from '../Actions/index';

const initialState = {
    mail:'',
    password:''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Login_Store_InputValue:
            {
                return {
                    ...state,...action.data
                }
            }
        default:
            {
                return {
                    ...state
                };
            }
    }
}


export default loginReducer;