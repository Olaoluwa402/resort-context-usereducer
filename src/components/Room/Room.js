import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Room = ({room}) => {
    let navigate = useNavigate();
        
    const featuredHandler = (slug)=> {
        navigate(`/rooms/${room.slug}`)
    }
  return (
    <div>
        <img src={room.images[0]} alt={room.slug} width={200} height={200}/>
        <h3>{room.name}</h3>
        <h3>{room.price}</h3>
        <Link to={`/rooms/${room.slug}`}>
           <button>Featured</button>
        </Link>

        {/* <button onClick={()=> featuredHandler(room.slug)}>Featured</button> */}
    </div>
  )
}

export default Room