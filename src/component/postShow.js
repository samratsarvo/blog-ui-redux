import React from 'react'
import {connect} from 'react-redux'
import { startSetUser } from '../action/users'
import {Link} from 'react-router-dom'

function PostShow(props){
    console.log(props.user)
    props.dispatch(startSetUser())
    
    return(
        <div>
            
            {
                props.post&&(
             <div>
                {/* <h1>USERNAME-{props.user.name}</h1>  */}
                <h2>TITLE-{props.post.title}</h2> 
                <h3>BODY-{props.post.body}</h3> 
                <hr/>
                <h4>COMMENTS-</h4>
                <h4>{props.comment.map((comment)=>{
                        return <li key={comment.id}>{comment.body}</li>
                        })}</h4>
                        <hr/>
                        
            </div>
            
                )
            }
            
            
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        post:state.posts.find((post)=>{
            return id==post.id
        }),
       user:state.users.find(user=>{
        if(Object.keys(state.posts).length>0){
            const userId=state.posts.find(post=>post.id==props.match.params.id).userId
            return user.id==userId
        }else{
            return null
        }
       }),
        comment:state.comments.filter((comment)=>{
            return id==comment.postId
        })
            
            
        
    }
}
export default connect(mapStateToProps)(PostShow)