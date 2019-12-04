import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import {rootReducer} from './Reducers';

const logger = createLogger({
    duration: true,
    diff: true
});


const configStore = () => createStore(rootReducer, applyMiddleware(ReduxThunk,logger));

export default configStore;