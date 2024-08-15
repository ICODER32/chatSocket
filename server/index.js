import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import { socketHandler } from "./utils/socket.handler.js";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", socketHandler);

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
