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
	return (
		<>
			<TaskForm/>
			{
				tasks.map(task=>(<TaskCard task={task} key={task._id}/>))
			}
			
		</>
	)
}

export default Index;