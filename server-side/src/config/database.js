const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 50000,
  socketTimeoutMS: 45000,
  bufferCommands: false,
}).then(() => {
  console.log("Success => Connected to database...")
}).catch(()=>{
  console.log("Error => Cannot connect to database!")
});