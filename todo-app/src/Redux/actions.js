export const  addTodo = (data) =>{
    return {
        type:"ADD_TODO",
        payload: data
    }
}


export const deleteTodo =  (id) => {
     return{
         type:"DELETE_TODO",
         payload:id
     }
}


export const editTodo = (data) => {
     return {
         type:"EDIT_TODO",
         payload:data
     }
}