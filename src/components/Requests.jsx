import React, {useEffect}from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addRequest } from '../utils/requestSlice'

import { useSelector } from 'react-redux'

const Requests = () => {
    const dispatch = useDispatch();

    const fetchrequests = async() => {
        // Fetch requests logic here  
        try  {
            const resp = await axios.get(BASE_URL + '/user/requests/received', {withCredentials: true})
            console.log(resp.data.data)
            dispatch(addRequest(resp.data.data))
        }catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchrequests()
    }, []);

    const requests = useSelector((store) => store.request);

      if(!requests) return

    if(requests.length === 0) return    <h1 className='font-bold text-2xl'>No Connections Requests Found</h1>


    return (
        <div className='text-center justify-center '>
            <h1 className='font-bold text-4xl'>Connections Requests</h1>
            {requests.map(connection => {
                const { _id, firstName, lastName, photoUrl, age, gender, about} = connection.fromUserId;
            
                return (
                    <div key={_id} className='flex justify-between items-center gap-4 m-4 p-4 border rounded-md bg-neutral text-white w-10/12 md:w-1/2 mx-auto'>
                        <div>
                            <img  alt='photo' src={photoUrl} className='w-20 h-20 rounded'/>
                        </div>
                        <div className='text-left'>
                            <h2 className='text-2xl'>{firstName + " " + lastName}</h2>
                            {age && gender && <p>{age + ', '+gender}</p>}
                            <p className='text-md'>{about}</p>
                        </div>
                        <div>
                            <button className='btn btn-primary mx-2'>Accept</button>
                            <button className='btn btn-secondary mx-2'>Reject</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Requests