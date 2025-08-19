import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed, removeUserFromFeed } from '../utils/feedSlice';
import axios from 'axios';
import FeedCard from './FeedCard';
import { AnimatePresence } from 'framer-motion';

const Feed = () => {
  const feed = useSelector((store) => store.feed) || []; // should always be []
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed.length > 0) return; // don't refetch if already available
    try {
      const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data.data || []));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <> 
      {feed.length === 0 && (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4">
          <p className="text-2xl font-semibold text-primary">No more developers in your feed!</p>
        </div>
      )}

      {feed.length > 0 && (
        <div className="container mx-auto px-4 py-8 min-h-screen bg-base-200">
          <h1 className="text-3xl font-bold text-center text-primary mb-8">Developer Feed</h1>

          {/* AnimatePresence here */}
          <AnimatePresence mode="wait">
            {feed.slice(0, 1).map((card) => (
              <FeedCard
                key={card._id}
                user={card}
                onRemove={(id) => dispatch(removeUserFromFeed(id))}
              />
            ))}
          </AnimatePresence>            
        </div>
      )}
    </>
  );
};

export default Feed;
