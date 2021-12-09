import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'
import PromiseMW from 'redux-promise';
const middleware = [thunk]

const createStoreWithMW = applyMiddleware(PromiseMW,...middleware)(createStore)
const store = createStoreWithMW(rootReducer)


// const store = createStore(rootReducer, applyMiddleware(...middleware))


export default store

