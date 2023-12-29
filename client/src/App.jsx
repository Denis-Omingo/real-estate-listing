import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Listing from './pages/Listing';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';

export default function App() {
  return (
    <BrowserRouter>

        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/search' element={<Search />} />
           <Route path='/listing/:listingId' element={<Listing />} />
          <Route element={<PrivateRoute/>}>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/create-listing" element={<CreateListing/>}/>
              <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
          </Route>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
  )
}
