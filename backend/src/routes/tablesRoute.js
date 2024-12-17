import express from "express";

const tablesRoute = express.Router();

tablesRoute.get('/tables');

export default tablesRoute;