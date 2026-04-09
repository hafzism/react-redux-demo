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
      <h1 className="text-2xl">Redux example:</h1>
      <input
        value={text}
        className="border-b-blue-950 border-4"
        onChange={(e)=>setText(e.target.value)}
      />

      <button onClick={handleAdd} className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-900 ">
        Add
      </button>

      {tasks.map(task => (
        <div key={task.id}>

          <span
            onClick={()=>dispatch(toggleTask(task.id))}
            className="text-lg px-4 font-bold"
          >
            {task.text}
          </span>

          <button
            onClick={()=>dispatch(deleteTask(task.id))}
            className="bg-red-600 hover:bg-red-800 rounded px-4 py-2"
          >
            delete
          </button>

        </div>
      ))}

    </div>
  )
}