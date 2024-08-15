import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:3000/");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    socket.on("welcome", (data) => {
      console.log(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return <div>APP</div>;
}

export default App;
