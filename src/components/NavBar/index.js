import CartWidget from './CartWidget'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from 'react-router-dom'
import './Styles.css'
const logo = <Image className='logo' src="/branding/logo.png" />
const NavBar = () =>{
    if (window.innerWidth > 539){
        return(
        <nav>
            <Link to='/'>{logo}</Link>
            <Link to='/Categoria/1'>Categoria 1</Link>
            <Link to='/Categoria/2'>Categoria 2</Link>
            <Link to='#'><CartWidget /></Link>
        </nav>
        )
    } else {
        return(
        <nav>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item><Link to='#'>Conocenos</Link></Dropdown.Item>
                    <Dropdown.Item><Link to='#'>Delivery</Link></Dropdown.Item>
                    <Dropdown.Item><Link to='#'>Contacto</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Link>{logo}</Link>
        </nav>
    )
    }
}
export default NavBar