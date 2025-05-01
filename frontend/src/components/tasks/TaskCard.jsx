import {toggelTaskStatus, deleteTask} from "../../services/tasks.js"

const TaskCard =({task, onDelete})=>{
	const toggleStatus =(taskId)=>{
		toggelTaskStatus(taskId).then(()=>{
			alert("Something here")
		}).catch(()=>alert("Something went wrong!"))
	}

	const deleteItem =(e, taskId)=>{
		e.preventDefault()
		deleteTask(taskId).then(()=>{
			alert("Task deleted")
			onDelete(taskId)
		}).catch(()=>alert("Something went wrong!"))
	}

	return(
		<>
			<form>
				<input type="checkbox" defaultChecked={task.isCompleted ? true : false} onChange={()=>toggleStatus(task._id)}/> 
				<label>{task.task}</label>
				<button onClick={(e)=>deleteItem(e, task._id)}>Delete</button>  
			</form>
		</>
	)
};

export default TaskCard;