import mongoose from "mongoose";

const dbConnect =async()=>{
	await mongoose.connect(process.env.MONGO_URI).then(()=>{
		console.log("DB connected successfully");
	}).catch(err=>{
		console.log(err)
	})
}

export default dbConnect