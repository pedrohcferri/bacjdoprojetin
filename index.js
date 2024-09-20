import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);

app.listen(8800, () => {
    console.log('Server is running on port 8800');
});

console.log('Starting server...'); 