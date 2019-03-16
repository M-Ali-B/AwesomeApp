import { createStore, combineReducers ,compose} from "redux";

import placesReducers from './reducers/places';

const rootReducers = combineReducers({
    places:placesReducers
});

let composeEnhancer = compose;

if(__DEV__){
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


const configureStore = () =>{
return createStore(rootReducers,composeEnhancer());
};

export default configureStore;