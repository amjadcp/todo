import {useState, useEffect, useRef } from "react"
import {createTask} from "../../services/tasks.js"

const TaskForm = ({onAdd}) =>{
	const taskRef = useRef("")
	const submitForm=(e)=>{
		e.preventDefault()
		createTask(taskRef.current.value).then((data)=>{
            alert("Task Created Successfully!")
            taskRef.current.value = ""
			onAdd(data)
        })
	}

	return(
		<>
			<form>
				<input type="text" ref={taskRef} />
				<button onClick={(e)=>submitForm(e)}>Add Task</button>
			</form>
		</>
	)
}


export default TaskForm