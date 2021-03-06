import React,{useState} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import { Button } from '../Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClose = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton =() =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Car- <i class="fas fa-car"></i>
                    </Link>
                    <div className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClose} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>Contact US</Link>
                        </li>
                        
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
