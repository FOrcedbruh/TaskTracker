import { create } from "zustand";
import { ITask } from "../types/ITask";

interface IStateType {
    tasks: ITask[],
    setTask: (task: ITask) => void,
    setComplete: (index: number, complete: boolean) => void,
    deleteTask: (index: number) => void
}



const useTasks = create<IStateType>((set) => ({
    tasks: [],
    setTask: (task: ITask) => set((state) => ({
        tasks: [...state.tasks, task]
    })),
    setComplete: (index: number, complete: boolean) => set((state) => ({
        tasks: state.tasks.map(task => {
            if (task.id === index) {
                return {...task, complete}
            }
            return task
        })
    })),
    deleteTask: (index: number) => set((state) => {
        state.tasks.splice(index, 1)
        return { tasks: state.tasks }
    })
}))


export { useTasks };