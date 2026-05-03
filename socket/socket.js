import { io } from "socket.io-client";

const socket = io("https://caresync-backend-production-5065.up.railway.app/");

export default socket;