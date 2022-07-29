import React, {useContext} from 'react'
import { GlobalContext } from '../../Context'
import Header from '../Header/Header'


const FeaturedRooms = () => {
    const {featuredRooms} = useContext(GlobalContext)
    
    const Featured = featuredRooms.map((room)=> (<div key={room.id}>
        <h2>{room.name}</h2>
        <img src={room.images[0]} alt={room.slug} width={200} height={200}/>
    </div>))

    console.log(featuredRooms)
  return (
    <div>
        <Header title='Featured Rooms'/>
        <div  style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
        {Featured}
        </div>
    </div>
  )
}

export default FeaturedRooms