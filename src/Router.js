import React from 'react'
import HomeScreen from './screens/HomeScreen'
import RoomsScreen from './screens/RoomsScreen'
import SingleRoom from './screens/SingleRoom'
import NotFoundScreen from './screens/NotFoundScreen'
import Layout from './components/Dashboard/Layout/Layout'
import MainLayout from './components/Layout/Layout'
import {Routes, Route, Navigate} from 'react-router-dom'


const Router = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<Layout />}>
            {/* <Route path='order' element={<OrderScreen />}/>
            <Route path='receipts' element={<ReceiptsScreen />}/> */}

        </Route>

        <Route path='/' element={<MainLayout><HomeScreen /></MainLayout>}/>
        <Route path='/rooms' element={<MainLayout><RoomsScreen /></MainLayout>}/>
        <Route path='/rooms/:slug' element={ <MainLayout><SingleRoom /></MainLayout>} />
        <Route path='/not-found' element={ <MainLayout><NotFoundScreen /> </MainLayout>}/>
        <Route path='*' element={<Navigate to='/not-found'/>}/>
    </Routes>
  )
}

export default Router