import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import Logo from '../../assets/images/logo-no-background.png'
import LogoSub from '../../assets/images/logo-no-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo'></img>
                <img src={LogoSub} className='sub-logo' alt='logosub' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#F0EEED" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#F0EEED" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#F0EEED" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                    <FontAwesomeIcon icon={faFolder} color="#F0EEED" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/ho%C3%A0ng-ph%C6%B0%C6%A1ng-hu%E1%BB%B3nh-424304203/' rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} color="#F0EEED" />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://github.com/phuongtvt55' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGit} color="#F0EEED" />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://www.facebook.com/hoangphuong.huynh.505/' rel='noreferrer'>
                        <FontAwesomeIcon icon={faFacebook} color="#F0EEED" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;