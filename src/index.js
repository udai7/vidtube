import dotenv from "dotenv";
import {app} from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8000;

connectDB ()
.then (()=> {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
})

.catch((err)=> {
    console.log("mongodb connection error", err)    
})
