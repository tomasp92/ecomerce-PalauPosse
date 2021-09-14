import CartWidget from './CartWidget'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from 'react-router-dom'
import './Styles.css'
const logo = <Image className='logo' src="/branding/logo.png" />
const NavBar = () =>
    <nav>
        <Link to='/'>{logo}</Link>
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                Categorias
            </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item><Link to='/Categoria/1'>Categoria 1</Link></Dropdown.Item>
                    <Dropdown.Item><Link to='/Categoria/2'>Categoria 2</Link></Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
        
        <Link to='/Cart'><CartWidget /></Link>
    </nav>
export default NavBar