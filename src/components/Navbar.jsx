import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={'/'} className={({isActive})=> isActive? "active-link" : ""}>Home</NavLink>
        <NavLink to={'/calculator'} className={({isActive})=> isActive? "active-link" : ""}>Calculator</NavLink>
        <NavLink to={'/hireworker'} className={({isActive})=> isActive? "active-link" : ""}>Hire Worker</NavLink>
        <NavLink to={'/contact'} className={({isActive})=> isActive? "active-link" : ""}>Contact us</NavLink>
        <NavLink to={'/aboutus'} className={({isActive})=> isActive? "active-link" : ""}>About us</NavLink>
       
    </nav>
  )
}

export default Navbar