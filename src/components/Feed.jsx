import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import axios from 'axios'
import FeedCard from './FeedCard'

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed)
  const dispatch = useDispatch();
  const getFeed = async() => {
    if(feed) return;
    try {
      
      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true})
      dispatch(addFeed(res.data.data))
    }catch(err) {
      console.error(err)
    }

  }

  useEffect(() => {
    getFeed()
  }, [])

  if(feed.length <= 0) return <h1 className='font-bold text-2xl text-center'>No users available at the moment.</h1>
  return (
      feed && (
  
        <div className='flex justify-center my-10'>
          <FeedCard user={feed[0]}/>
        </div>
      )
  );
}

export default Feed