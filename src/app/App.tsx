import enterIcon from "./../../icons/enterIcon.svg"
import Task from "../components/Task";
import { useTasks } from "../zustand/useTasks";
import { useState } from "react";
import { ITask } from "../types/ITask";


const App: React.FC = () => {

    const { tasks, setTask } = useTasks();
    const [title, setTitle] = useState<string>("")

    const createTask = () => {
        const task: ITask = {
            title,
            complete: false,
            id: tasks.length
        }

        setTask(task)
        setTitle("")
    }

 
    return (
        <main className="main">
            <section className="tracker">
                <h2>Task Tracker</h2>
                <div className="inputDiv">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="task" className="input" placeholder="Start writing and press enter to create task"/>
                    <button onClick={createTask} className="enterBtn"><img src={enterIcon} width={20} height={20} alt=""/></button>
                </div>
                <div className="tasks">
                    {tasks.map(task => {
                        return (
                            <Task id={task.id} key={task.id} title={task.title} complete={task.complete}/>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default App;