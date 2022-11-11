import express from "express";
import dotenv from "dotenv";
import { errorHandler, logger, notFound } from "./middleware/index.js"
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const PORT = process.env.PORT || 4000;
app.use(logger)
app.get("/",  (req, res) => {
  res.send(`Hello SuperUsers!`);
});

// your code here
app.get("/multiply/:number", (req, res)=>{
  let result = req.params.number * process.env.MULTIPLIER
  res.send({result})

})


app.use(notFound)

app.use(errorHandler);



app.listen(PORT, () => {
  console.log("Server is running at port" + PORT);
});
