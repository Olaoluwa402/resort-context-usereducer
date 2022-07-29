import React,{useState, useEffect} from "react";
import Data from "./data";


const GlobalContext = React.createContext();

const Provider = ({children}) => {
     const [state, setState] = useState({
         rooms: localStorage.getItem('rooms') ? JSON.parse(localStorage.getItem('rooms')) : [],
         featuredRooms: [],
         filteredRooms: [],
         loading:true,
         type: "all",
         price: 0,
         maxPrice:0,
         maxSize:0,
         capacity: 1,
         pets: false,
         breakfast: false,
     })

     useEffect(() => {
        loadInitialState()
     }, [])

    //  load inital state
     const loadInitialState = () => {
         const temptRooms = [...Data]
        //  console.log(temptRooms)
         let rooms = temptRooms.map((room) => {
             let newRoom = {
                id: room.sys.id,
                ...room.fields,
                images: room.fields.images.map((img) => img.fields.file.url)
             }
             return newRoom
         })

         const featuredRooms = rooms.filter((room) => room.featured === true)

         const prices = rooms.map((room)=> room.price)
         const maxPrice = Math.max(...prices)
        
         const sizes = rooms.map((room)=> room.size)
         const maxSize = Math.max(...sizes)

         console.log(maxSize, maxPrice)

        //  console.log(rooms)
         setState({
            ...state,
            rooms,
            featuredRooms,
            filteredRooms:rooms,
            loading:false,
            maxPrice,
            maxSize,
            price:maxPrice
         })

         localStorage.setItem('rooms', JSON.stringify(rooms))
     }

     const changeHandler = (e) =>{
       const {value,name,type} = e.target
       console.log(value, name, type)

       setState({
         ...state,
         [name]:value
       })

       if(type !== 'all'){
         const copy = [...state.rooms]
         // console.log('filtecopy', copy)
          const filtered = copy.filter((room) => room.type === value)
         //  console.log('filtered', filtered)
          setState({
            ...state,
            filteredRooms:filtered
          })
       }
     }

// console.log(state)
     const getSingleRoom = (slug) => {
        console.log('called')
         const tempRooms = state.rooms
         const foundRoom = tempRooms.find((room) => room.slug === slug)
         return foundRoom;
     }


    return (
       <GlobalContext.Provider value={{...state, getSingleRoom, changeHandler}}>
          {children}
       </GlobalContext.Provider>
    )
}


export {GlobalContext, Provider}