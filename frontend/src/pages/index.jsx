import TaskForm from "../components/tasks/TaskForm.jsx"
import TaskCard from "../components/tasks/TaskCard.jsx"
import {useState, useEffect} from "react"
import {getTasks} from "../services/tasks.js"

const Index = () =>{
	const [tasks, setTasks] = useState([])
	useEffect(()=>{
		getTasks().then(data=>{
			setTasks(data)
		})
	}, [])
	const handleDelete = (taskId) => {
		setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
	};
	const handleAdition = (task) => {
		setTasks(prevTasks => [...prevTasks, task])
	}

	return (
		<>
			<TaskForm onAdd={handleAdition}/>
			{
				tasks.map(task=>(<TaskCard task={task} key={task._id} onDelete={handleDelete}/>))
			}
			
		</>
	)
}

export default Index;