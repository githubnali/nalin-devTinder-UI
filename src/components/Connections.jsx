import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

import { Link } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const resp = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(resp.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  const connections = useSelector((store) => store.connection);

  if (!connections) return null;

  if (connections.length === 0)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4">
        <h1 className="font-bold text-2xl text-center mt-10 text-primary">
          😔 No Connections Found
        </h1>

      </div>
    );

  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      <h1 className="font-bold text-4xl text-primary text-center mb-8">
        Connections
      </h1>

      {connections.map((connection) => (
        <div
          key={connection._id}
          className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-base-100 shadow-md border border-primary/20 hover:shadow-lg transition-all"
        >
          <img
            alt="profile"
            src={connection.photoUrl}
            className="w-20 h-20 rounded-full border-4 border-primary object-cover shadow"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-primary">
              {connection.firstName + " " + connection.lastName}
            </h2>
            {connection.age && connection.gender && (
              <p className="text-neutral/70 text-sm">
                {connection.age + ", " + connection.gender}
              </p>
            )}
            <p className="text-neutral/80 text-sm mt-1">{connection.about}</p>
          </div>
          <Link to={"/chat/" + connection._id}>
            <button className="btn btn-primary">Chat</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Connections;
