import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import noteReducer from './noteReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    note: noteReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer 
})

export default rootReducer