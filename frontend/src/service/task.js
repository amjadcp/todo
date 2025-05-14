import { backendClient } from "../utils/axios";

export const createTask = async (task) => {
    const response = await backendClient.post("/tasks", {
        task: task,
    })
    return response.status === 201 ? response.data : null
}
