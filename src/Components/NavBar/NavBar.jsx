import { Link } from "react-router-dom"
import './styles.css'
import { days } from "../../utils/days"
import { months } from "../../utils/month"

const NavBar = () => {
  const today = new Date()
  return (
    <nav className="navbar">
        <ul className="navbar-list">
            <li><Link to={'/'}>Inicio</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li>{`${days[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]}`}</li>
        </ul>
    </nav>
  )
}

export default NavBar