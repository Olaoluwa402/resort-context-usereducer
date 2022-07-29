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
         minSize:0,
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
         const minSize = Math.min(...sizes)

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
            minSize,
            price:maxPrice
         })

         localStorage.setItem('rooms', JSON.stringify(rooms))
     }

     const changeHandler = (e) =>{
      //  const {value,name} = e.target
      //  console.log(value, name)
      const type = e.target.type
      const name = e.target.name;
      const value = type === 'checkbox' ? e.target.checked : e.target.value;
       console.log(name, value)
       setState({
         ...state,
         [name]:value
       })

       let filteredRM = [...state.rooms]
       console.log(filteredRM)

       if(name === 'type' && value !== 'all'){
         // console.log('filtecopy', copy)
          filteredRM = filteredRM.filter((room) => room.type === value)
         //  console.log('filtered', filtered)
       }

       if(name === 'capacity' && parseInt(value) !== 1){
         // console.log('filtecopy', copy)
          filteredRM = filteredRM.filter((room) => room.capacity === parseInt(value))
         //  console.log('filtered', filtered)
       }

       if(name === 'price' ){
         // console.log('filtecopy', copy)
          filteredRM = filteredRM.filter((room) => room.price <= state.price && room.price <= state.maxPrice)
         //  console.log('filtered', filtered)
       }
         // console.log('filtecopy', copy)
          filteredRM = filteredRM.filter((room) => room.size >= parseInt(state.minSize) && room.size <=  parseInt(state.maxSize))
         //  console.log('filtered', filtered)
       
         if(type === 'checkbox'){
            filteredRM = filteredRM.filter((room) => room.pets === true && room.breakfast === true)
         }


         setState((prev)=> ({
            ...prev,
            filteredRooms:filteredRM
         }))
      //  setState({
      //    ...state,
      //    filteredRooms:filteredRM
      //  })
     }

   //   console.log(state)

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