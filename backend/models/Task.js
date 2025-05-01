import mongoose from "mongoose";

const Task = new mongoose.Schema({
	task: {
		type: String,
		required: true
	},
	isCompleted: {
		type: Boolean,
		default: false
	}
});

export default mongoose.model("task", Task);