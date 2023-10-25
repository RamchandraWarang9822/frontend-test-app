import {} from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span className='logo'>Cuvette</span>
        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/92023869?v=4" alt="" className="profile-pic" />
          <span className="username">Ramchandra Warang</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar