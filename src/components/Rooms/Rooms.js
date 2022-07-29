
import Header from '../Header/Header'
import React, {useContext} from 'react'
import { GlobalContext } from '../../Context'
import Room from '../Room/Room'

const Rooms = () => {
    const {filteredRooms} = useContext(GlobalContext)
    console.log(filteredRooms)
  return (
    <div >
        <Header title='Available Rooms'/>
   <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
   {
            filteredRooms && filteredRooms.length > 0 ? filteredRooms.map((room) => <Room key={room.id} room={room}/>) : (<h2>No room found</h2>)
        }
   </div>
    </div>
  )
}

export default Rooms