import 'dotenv/config';
import express from "express";
import server from "./server.js";

const port = process.env.PORT;
console.log(port);
const app = express();


app.get('/', (req, res) => {
  res.send('<h1>Test</h1>')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
