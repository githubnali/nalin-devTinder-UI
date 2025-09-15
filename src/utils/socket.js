import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const CreateSocketConnection = () => {
   
    // updating the path of api for local host and prod
    if(location.hostname === 'localhost') {
        return io(BASE_URL)
    } else {
        return io("/", {path: "/api/socket.io"});
    }
}