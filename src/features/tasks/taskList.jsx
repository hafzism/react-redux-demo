import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask } from "./taskSlice";
import { useState } from "react";


export default function TaskList(){
    const tasks = useSelector(state => state.tasks.items)
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    const handleAdd = () => {
    dispatch(addTask(text))
    setText("")
  }
   return (
    <div>
      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>

      {tasks.map(task => (
        <div key={task.id}>

          {/* <span
            onClick={()=>dispatch(toggleTask(task.id))}
          >
            {task.text}
          </span> */}

          <button
            onClick={()=>dispatch(deleteTask(task.id))}
          >
            delete
          </button>

        </div>
      ))}

    </div>
  )
}