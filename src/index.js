import React from 'react' 
import App from './App'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { startSetUser, startSetPost } from './action/users'
import { startSetComments } from './action/comments'

const store=configureStore()
//store.dispatch(startSetUser())
store.dispatch(startSetPost())
store.dispatch(startSetComments())

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))
