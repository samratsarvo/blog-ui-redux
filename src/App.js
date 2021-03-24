import React from 'react'
import Home from './component/home'
import {Link, BrowserRouter,Route} from 'react-router-dom'
import UserList from './component/userList'
import UserShow from './component/userShow'
import PostList from './component/postList'
import postShow from './component/postShow'

function App(){
    return(
        <div>
           <BrowserRouter>
                    <h1><center>Redux BlogUI</center></h1>
                    <Link to='/home'>Home|</Link>
                    <Link to='/users'>Users|</Link>
                    <Link to='/posts'>Posts</Link>


                    <Route path='/home' component={Home}/>
                    <Route path='/users' component={UserList} exact={true}/>
                    <Route path='/users/:id' component={UserShow}/>
                    <Route path='/posts' component={PostList} exact={true}/>
                    <Route path='/posts/:id' component={postShow}/>
           </BrowserRouter>
        </div>
    )
}
export default App