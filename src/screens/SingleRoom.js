
import { useParams } from 'react-router-dom'
import React, {useContext, useState,useEffect} from 'react'
import { GlobalContext } from '../Context'

const SingleRoom = () => {
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const {getSingleRoom} = useContext(GlobalContext)
  const {slug} = useParams()

  useEffect(() => {
      console.log('roomcalled')
      console.log(slug)
      if(!room || slug !== room.slug){
        const rm=  getSingleRoom(slug)
        console.log(rm, rm)
        setRoom(rm)
       setLoading(false)
      }
  }, [slug])
  console.log(room)

  return (
    <div>
        {loading && (<h2>Loading...</h2>) } 
        {room && <div>
          <h2>hello</h2>
          <h3>{room.price ? room.price : ''}</h3>
          <h3>{room.name ? room.name : ''}</h3>
          <p>{room.description ? room.description : ''}</p>
          {
            room.images.length > 0 && room.images.map((img, i)=> <img key={i} src={img} alt={room.name} width={200} height={200}/>)
          }
      </div>}
    </div>
    
    
  )
}

export default SingleRoom