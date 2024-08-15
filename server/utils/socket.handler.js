export const socketHandler = (socket) => {
  console.log("a user connected");
  console.log(socket.id);
  socket.broadcast.emit("welcome", `Welcome to the server ${socket.id}`);
};
