import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo,deleteTodo,editTodo} from '../Redux/actions'


function Todo() {
    const store = useSelector((state) => state.todoList);
    const dispatch = useDispatch()
    
    const [todoName,setTodoName] = useState("")
    const [toggleButton,setToggleButton] = useState(false)
    const [todoList,setTodoList] = useState([]);
    const [updateId,setUpdateId] = useState("");

    useEffect(()=>{
        setTodoList(store)
    },[store])
    


    /*===============================================
          Handle Add
    =================================================
    */

    const handleAdd = () => {

        let newData = {
            id : new Date().getTime().toString(),
            name : todoName
        }
        
        dispatch(addTodo(newData))
        setTodoName("")
    }

    /*===============================================
          Handle Delete
    =================================================
    */


    const handleDelete = (id) =>{
        dispatch(deleteTodo(id))
    }


     /*===============================================
          Handle Edit
    =================================================
    */


    const handleEdit = (item) => {
        setTodoName(item.name)
        setToggleButton(true)
        setUpdateId(item.id)
        
    }



    const handleSave = () => {
        let newItem = {
            id: updateId,
            name: todoName
        }

        dispatch(editTodo(newItem))
        setTodoName("")
        setToggleButton(false)
    }

  return (
    <>
      <div className="container">
          <div className="inputField">
              <input type="text" placeholder='...Add Todo' value={todoName} onChange={(event)=>setTodoName(event.target.value)}/>
              {
                  toggleButton ? <button onClick={()=>handleSave()}>Update</button> : <button onClick={()=>handleAdd()}>Add</button>
              }
          </div>

          <div className="showList">
              <table border="1">
                  <thead>
                     <tr>
                         <th>#ID</th>
                         <th>Name</th>
                         <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                      {
                          todoList.map((item)=>{
                              return (<tr>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td><button onClick={()=>handleEdit(item)}>Edit</button> || <button onClick={()=>handleDelete(item.id)}>Delete</button></td>
                              </tr>)
                          })
                      }
                  </tbody>
              </table>
          </div>
      </div>
    </>
  )
}

export default Todo
