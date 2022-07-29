import React from 'react'
import Rooms from '../components/Rooms/Rooms'
import SortRoomForm from '../components/SortRoomForm/SortRoomForm'

const RoomsScreen = () => {
  return (
       <div>
        <SortRoomForm />
         <Rooms />
       </div>
  )
}

export default RoomsScreen