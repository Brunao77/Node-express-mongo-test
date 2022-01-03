import express from "express";
import morgan from "morgan";
import productsRouter from "./routes/products.routes"
import usersRouter from "./routes/users.routes"
import authRouter from "./routes/auth.routes"
import "./database"
import { createRoles } from "./libs/initialSetup";

const app = express();
createRoles()

app.use(express.json());
app.use(morgan("dev"));
app.use("/users",usersRouter);
app.use("/products",productsRouter);
app.use("/auth",authRouter)

app.get("/", (req, res)=>{
    res.json("welcome");
})

app.listen(4000,()=>{
    console.log('ready')
})