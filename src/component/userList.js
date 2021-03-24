import React from 'react'
import { connect } from 'react-redux'
import { startSetUser } from '../action/users'
import {Link} from 'react-router-dom'

function UserList(props){
    props.dispatch(startSetUser())
    return(
        <div>
            <h2>UserList-{props.users.length}</h2>
            {props.users.map((user)=>{
            return<li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            })}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps) (UserList)