const mongoose =require('mongoose');


const connectToMongo = () => {
    mongoose.connect("mongodb://127.0.0.1/inotebook", { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("Connected to mongo successfully"))
      .catch(err => console.error("Failed to connect to mongo:", err));
  }
  
module.exports=connectToMongo;