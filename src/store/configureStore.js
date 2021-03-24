import usersReducer from '../reducers/users'
import thunk from 'redux-thunk'


import {combineReducers,createStore,applyMiddleware} from 'redux' 
import postReducer from '../reducers/posts'
import commentsReducer from '../reducers/comments'
const configureStore=()=>{
    const store=createStore(combineReducers({
        users:usersReducer,
        posts:postReducer,
        comments:commentsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore