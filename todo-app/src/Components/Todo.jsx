import React, { useState } from 'react'
import { useSelector } from 'react-redux'


function Todo() {
    const store = useSelector((state) => state.todoList);
    
    const [todoName,setTodoName] = useState("")
    const [toggleButton,setToggleButton] = useState(false)
  return (
    <>
      <div className="container">
          <div className="inputField">
              <input type="text" placeholder='...Add Todo' value={todoName} onChange={(event)=>setTodoName(event.target.value)}/>
              {
                  toggleButton ? <button>Edit</button> : <button>Add</button>
              }
          </div>

          <div className="showList">

          </div>
      </div>
    </>
  )
}

export default Todo
