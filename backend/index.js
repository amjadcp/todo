import express from "express";
import cors from "cors"
import dbConnect from "./db-connection.js"
import Task from "./models/Task.js";

dbConnect();

const app = express();

app.use(express.json());
app.use(cors())

app.get("/tasks", async(req, res)=>{
	const tasks = await Task.find();
	return res.status(200).json({
		data: tasks
	})
})

app.post("/tasks", async(req, res)=>{
	const task = await Task.create({
		task: req.body.task
	});
	return res.status(201).json({
		data: task
	})
})

app.patch("/tasks/:id", async(req, res)=>{
	const task = await Task.findOneAndUpdate(
	{_id: req.params.id}, 
	[{ $set: { isCompleted: { $eq: [false, "$isCompleted"] } } }],
    { new: true });
	return res.status(200).json({
		data: task
	})
});

app.delete("/tasks/:id", async(req, res)=>{
	const task = await Task.findOneAndDelete({_id: req.params.id});
	return res.status(200).json({
		data: task
	})
});


app.listen(5000, ()=>console.log("server running"));
