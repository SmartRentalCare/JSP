import React, { useEffect, useState } from "react";

export default function Browser() {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");
    ws.open = () => {
      console.log("success");
    };
    ws.onmessage = (event) => {
      const message = event.data;
      console.log("receive:${message}");
    };
    ws.onclose = () => {
      console.log("close");
    };
    setWs(ws);
    return () => {
      ws.close();
    };
  }, []);
  const sendMessage = (message) => {
    ws.send(message);
    console.log("sent:${message}");
  };
  return (
    <div>
      <button onClick={() => sendMessage("hello")}>send</button>
    </div>
  );
}
