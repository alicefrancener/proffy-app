import express from "express";
import ClassesControler from "./controllers/ClassesController";

const routes = express.Router();
const classesControllers = new ClassesControler();

routes.post("/classes", classesControllers.create);

export default routes;
