import "dotenv/config";
import express from "express";
import { userRoutes } from "./routes/user";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
