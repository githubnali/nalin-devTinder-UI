import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const CreateSocketConnection = () => {
   
    // updating the path of api for local host and prod
    return io(BASE_URL, { withCredentials: true });
}