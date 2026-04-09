import TaskList from './features/tasks/taskList'
import UserFetch from './features/users/userFetch'
function App() {

  return (
    <>
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">



    <TaskList></TaskList>
    <UserFetch></UserFetch> 
    </div>
    </>
  )
}

export default App
