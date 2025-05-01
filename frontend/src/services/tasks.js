import api from "../utils/axios.js"


export const getTasks =async()=>{
	const tasks = await api.get("/tasks")
	return tasks.data.data
}

export const createTask =async(task)=>{
	const response = await api.post("/tasks", {
		task
	})
	return response.data.data
}

export const toggelTaskStatus=async(taskId)=>{
	await api.patch("/tasks/"+taskId);
}

export const deleteTask=async(taskId)=>{
	await api.delete("/tasks/"+taskId);
}