import React, {useContext, useState,useEffect} from 'react'
import { GlobalContext } from '../../Context'
import Header from '../Header/Header'

const SortRoomForm = () => {
    const {rooms, maxPrice, maxSize, price, capacity, pets, breakfast, type, changeHandler} = useContext(GlobalContext)
     
    let majorTypes = rooms.map((room)=> room.type)
       majorTypes = new Set(majorTypes )
       majorTypes = ['all', ...majorTypes]
    console.log(majorTypes)

    const types = majorTypes.map((type, i) => (<option key={i} value={type}>{type}</option>))
  return (
    <div>
         <Header title='Search rooms'/>
         <form>
            <div className="formGroup">
                <label htmlFor="type">Room type</label>
                <select name='type' id='type' value={type} onChange={changeHandler}>
                    {types}
                </select>
            </div>
         </form>
    </div>
  )
}

export default SortRoomForm