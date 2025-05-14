import {createContext, useContext} from 'react';
import { createTask } from '../service/task';


const TaskContext = createContext();

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContext must be used within a TaskProvider");
    }
    return context;
}

export const TaskProvider = ({ children }) => {
    const addTask = (task) => {
        const status = createTask(task)
            .then((response) => {
                if (response) {
                    alert("Task created successfully");
                } else {
                    console.error("Failed to create task");
                }
                return true
            })
            .catch((error) => {
                console.error("Error creating task", error);
                return false
            });
        return status;
    }

    const value = {
        addTask,
    }
    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}