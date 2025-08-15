import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionsSlice'
const Connections = () => {

  const dispatch = useDispatch();
  const fetchConnections = async() => {

    try {
        const resp = await axios.get(BASE_URL + "/user/connections", {withCredentials: true});
        console.log(resp.data.data)
        dispatch(addConnections(resp.data.data))
    }catch(err) {
        console.error(err)
    }
  }

  useEffect(() => {
    fetchConnections()
  }, [])

  const connections = useSelector((store) => store.connection);

  if(!connections) return

  if(connections.length === 0) return    <h1 className='font-bold text-2xl'>No Connections found</h1>


  return (
    <div className='text-center justify-center '>
        <h1 className='font-bold text-4xl'>Connections</h1>
        {connections.map(connection => (
            <div className='flex gap-4 m-4 p-4 border rounded-md bg-neutral text-white w-10/12 md:w-1/2 mx-auto'>
                <div>
                    <img  alt='photo' src={connection.photoUrl} className='w-20 h-20 rounded'/>
                </div>
                <div className='text-left'>
                    <h2 className='text-2xl'>{connection.firstName + " " + connection.lastName}</h2>
                    {connection.age && connection.gender && <p>{connection.age + ', '+connection.gender}</p>}
                    <p className='text-md'>{connection.about}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Connections