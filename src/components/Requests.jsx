import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchRequests = async () => {
    try {
      const resp = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(resp.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const requests = useSelector((store) => store.request);

  if (!requests) return null;

  if (requests.length === 0)
    return (
      <h1 className="font-bold text-2xl text-center mt-10 text-neutral/70">
        No Connection Requests Found 🙌
      </h1>
    );

  return (
    <div className="text-center px-4 min-h-[80vh]">
      <h1 className="font-bold text-4xl text-primary mb-8">
        Connection Requests
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {requests.map((req) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            req.fromUserId;

          return (
            <div
              key={_id}
              className="card bg-base-100 shadow-lg rounded-2xl border border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center">
                <img
                  alt="profile"
                  src={photoUrl}
                  className="w-24 h-24 rounded-full border-4 border-primary shadow-md object-cover"
                />
                <h2 className="card-title text-primary mt-3">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && (
                  <p className="text-neutral/70 text-sm">
                    {age + ", " + gender}
                  </p>
                )}
                <p className="text-neutral/80 text-sm italic mt-2">{about}</p>

                <div className="card-actions mt-4">
                  <button
                    className="btn btn-error text-white"
                    onClick={() => reviewRequest("rejected", req._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="btn btn-primary text-white"
                    onClick={() => reviewRequest("accepted", req._id)}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
