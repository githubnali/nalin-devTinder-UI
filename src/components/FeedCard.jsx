import React from 'react'

const FeedCard = ({ user }) => {
    const {firstName, lastName, photoUrl, age, gender, about } = user
  return (
    <div className="card bg-neutral text-white w-96 shadow-sm border border-neutral">
        <figure>
            <img
                src={photoUrl}
                alt="Photo" 
            />

        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            {age && gender &&  <p>{age + ", " + gender}</p>}
            
            <p>{about}</p>
            <div className="card-actions justify-center my-4">
                <button className="btn btn-primary">Ignore</button>
                <button className="btn btn-secondary">Interested</button>
            </div>
        </div>
    </div>
  )
}

export default FeedCard