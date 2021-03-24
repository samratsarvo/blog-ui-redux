import axios from "axios"


export const setComments=(n)=>{
    return {type:'SET_COMMENTS',payload:n}
}

export const startSetComments=(n)=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            const comments=response.data
            dispatch(setComments(comments))
        })
    }
}