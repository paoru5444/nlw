import express from "express";

import PointsController from "./controllers/PointsController";
const pointsController = new PointsController();

import ItemController from "./controllers/itemsController";
const itemsController = new ItemController();

const routes = express();

routes.get("/items", itemsController.index);

routes.post("/points1", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;
