import "express-async-errors";
import express from "express";
import handleError from "./errors/HandleError";
import userRoutes from "./routers/users.routes";
import loginRouter from "./routers/login.routes";
import contactRoutes from "./routers/contact.routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/login", loginRouter);
app.use("/contact", contactRoutes);

app.use(handleError);

export default app;
