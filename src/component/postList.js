import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

function PostList(props){
    return(
        <div>
            <h1>PostList-{props.posts.length}</h1>
            {props.posts.map((post)=>{
            return<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
            })}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(PostList)