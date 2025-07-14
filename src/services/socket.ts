// src/services/socket.ts

import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const connectSocket = () => {
  if (!socket) {
    socket = io(import.meta.env.VITE_SOCKET_URL || "http://localhost:5000");
  }
};

export const on = (event: string, callback: (...args: any[]) => void) => {
  if (!socket) connectSocket();
  socket?.on(event, callback);
};

export const off = (event: string, callback: (...args: any[]) => void) => {
  socket?.off(event, callback);
};
