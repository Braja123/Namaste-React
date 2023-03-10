import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isOpen);

  // When we click on that hamburger menu -> an action is dispatched -> which call a reducer function which modifies the slice of our store and our sideBar component has been subscribed to our redux store and it is auto-magically updates 

  // Early return pattern
  if(!isMenuOpen) return null; 
  return (
    <div className='p-5 shadow-lg w-64'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Menu</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Menu</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default Sidebar