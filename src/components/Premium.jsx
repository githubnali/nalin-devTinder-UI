import React from 'react'

const Premium = () => {
  return (
    <div className='m-10'>
        <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid h-auto grow place-items-center p-5">
                <h1 className='font-bold text-3xl'>Silver Membership</h1>
                <ul className='mb-5'>
                    <li>- Chat with other profiles</li>
                    <li>- 100 Connection per day</li>
                    <li>- Blue tick</li>
                    <li>- 3 Months</li>
                </ul>
                <button className='btn btn-secondary'>Buy Silver</button>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="card bg-base-300 rounded-box grid h-auto grow place-items-center p-5">
                <h1 className='font-bold text-3xl'>Gold Membership</h1>
                <ul className='mb-5'>
                    <li>- Chat with other profiles</li>
                    <li>- Infinite Connection per day</li>
                    <li>- Blue tick</li>
                    <li>- 6 Months</li>
                </ul>
                <button className='btn btn-primary'>Buy Gold</button>    
            </div>
        </div>
    </div>
  )
}

export default Premium