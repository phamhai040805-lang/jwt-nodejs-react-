import express from "express";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello Word");
  });
  return app.use("/", router);
};

export default initWebRoutes;
