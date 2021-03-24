import React from 'react'
import { connect } from 'react-redux'
import { startSetPost } from '../action/users'
import {Link} from 'react-router-dom'

function UserShow(props){
    
    return(
        <div>
            {
                props.user&&(
                    <div>
                        <h1>UserName-{props.user.name}</h1>
                        <h2>Posts Written By User</h2>
                        {props.post.map((post)=>{
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })}
                        
                    </div>
                )   
            }   
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        user:state.users.find((user)=>{
            return user.id==id
            
        }),
        
        post:state.posts.filter((post)=>{
            return post.userId==id
        })
        
    }
}
export default connect(mapStateToProps)(UserShow)