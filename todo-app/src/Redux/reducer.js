const initialState = {
    todoList : []
}



export const userReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "ADD_TODO" : return{
            ...state,
            todoList: [...state.todoList, action.payload]
        }


        case "DELETE_TODO" : 
             const newList = state.todoList.filter((item) => item.id !== action.payload);

             return {
             
                todoList : [...newList]
        }


        case "EDIT_TODO" : 
             console.log("edit item ",action.payload)
             const updatedList = state.todoList.map((item) => {
                 if(item.id === action.payload.id){
                     
                     return {...item,name: action.payload.name};
                 }

                 return item;
             })

             return {
                 todoList: [...updatedList]
             }


        default : return state;
    }
}