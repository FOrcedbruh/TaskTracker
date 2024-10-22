import { ITask } from "../types/ITask";
import { useTasks } from "../zustand/useTasks";
import trashIcon from './../../icons/trashIcon.svg'

const Task: React.FC<ITask> = ({ title, complete, id }) => {


    const { setComplete, deleteTask } = useTasks()

    const completeHandler = () => {
        setComplete(id, !complete)
    }

    const deleteHandler = () => {
        deleteTask(id)
    }
    

    return (
        <div className="task">
            <div className="checkbox" style={{"backgroundColor": complete ? "gray" : "#fff"}} onClick={completeHandler}></div>
            <p style={{"textDecoration": complete ? "line-through" : "none"}}>{title}</p>
            <img src={trashIcon} alt="" width={16} height={20} onClick={deleteHandler}/>
        </div>
    )
}

export default Task;