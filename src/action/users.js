import axios from "axios"

export const setUser=(n)=>{
    return {type:'SET_USERS',payload:n}
}
export const setPost=(n)=>{
    return{type:'SET_POSTS',payload:n}
}



export const startSetUser=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data
            //console.log(users)
            dispatch(setUser(users))
            
        })
       
    }
}

export const startSetPost=()=>{
    return(dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            const posts=response.data
            dispatch(setPost(posts))
        })
    }
}