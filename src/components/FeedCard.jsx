import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { BASE_URL } from "../utils/constants";

const FeedCard = ({ user, onRemove }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleSendRequest = async (status, userId) => {
    // set animation direction
    setSwipeDirection(status);

    setTimeout(async () => {
      try {
        await axios.post(
          `${BASE_URL}/request/send/${status}/${userId}`,
          {},
          { withCredentials: true }
        );
      } catch (err) {
        console.error(err);
      } finally {
        onRemove(userId); // remove after animation finishes
      }
    }, 100); // match animation duration
  };

  return (
    <motion.div
      key={_id}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        x: swipeDirection === "ignored" ? -500 : 500, // slide left or right
        rotate: swipeDirection === "ignored" ? -20 : 20, // rotate effect
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl overflow-hidden mx-auto my-4 border border-primary"
    >
      {/* Image */}
      <figure>
        <img src={photoUrl} alt="Profile" className="w-full object-cover" />
      </figure>

      {/* Info */}
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-primary">
          {firstName} {lastName}
        </h2>
        {age && gender && (
          <p className="text-neutral/80">{age}, {gender}</p>
        )}
        <p className="text-neutral/80">{about}</p>

        {/* Buttons */}
        <div className="card-actions justify-center my-4 gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="btn btn-outline btn-error gap-2"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary gap-2 text-white"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedCard;
