import React, {useState} from 'react';
import Home from './Home'
import Education from './Education';
import Experience from './Experience';
import TechnicalSkills from './TechnicalSkills';
import Certifications from './Certifications';
import Achievements from './Achievements';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = () => {
        active === 'nav__menu' 
        ? setActive('nav__menu nav__active')
        : setActive('nav__menu');

        toggleIcon === 'nav__toggler'
        ? setToggleIcon('nav__toggler toggle')
        :setToggleIcon("nav__toggler")
    };
    return(
      <Router>
        {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link> */}
        <div style={{height: "100vh"}}>
          <Nav className="nav nav-tabs flex-grow-1 pe-3">
              <li><Link  className="nav_link,\ nav__brand" to="#">ABeY</Link></li>
              <ul className={active} >
                <li className="nav-link waves-light nav__item"><Link className="nav_link h3" to="/abey-portfolio">Home</Link></li>
                <li className="nav-link waves-light nav__item"><Link className="nav_link h3"  to="/education">Education</Link></li>
                {/* <li className="nav-link waves-light nav__item"><Link className="nav_link h3"  to="/experience">Experience</Link></li> */}
                {/* 
                <li className='nav__item'><Link className="nav_link"  to="/technical-skills">Technical Skills</Link></li>
                <li className='nav__item'><Link className="nav_link"  to="/certifications">Certifications</Link></li>
                <li className='nav__item'><Link className="nav_link"  to="/achievements">Achievements</Link></li> */}
                
              </ul>
              <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
              </div>
        </Nav>

        
        <Routes>
          <Route path="/abey-portfolio" element={<Home/>} />
          <Route path="/education" element={<Education/>} />
          {/* <Route path="/experience" element={<Experience/>} /> */}
          {/* 
          <Route path="/technical-skills" element={<TechnicalSkills/>} />
          <Route path="/certifications" element={<Certifications/>} />
          <Route path="/achievements" element={<Achievements/>} /> */}
        </Routes> 
      </div>
    </Router>
    );

}

export default NavBar;
