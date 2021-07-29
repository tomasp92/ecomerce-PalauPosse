import CartWidget from './CartWidget'
import Image from 'react-bootstrap/Image'
// import Dropdown from 'react-bootstrap/Dropdown'
import './Styles.css'

const NavBar = () =>
    <nav>
        <Image src="logo192.png" roundedCircle />
       {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Conocenos</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Delivery</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Contacto</Dropdown.Item>
            </Dropdown.Menu>
       </Dropdown>*/}
        <p><a href='#'>Conocenos</a></p>
        <p><a href='#'>Delivery</a></p>
        <p><a href='#'>Contacto</a></p>
        <p><a href='#'><CartWidget /></a></p>
    </nav>

export default NavBar