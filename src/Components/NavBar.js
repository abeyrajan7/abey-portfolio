import React, {useState} from 'react';
import Home from './Home'
import Education from './Education';
import Experience from './Experience';
import TechnicalSkills from './TechnicalSkills';
import Certifications from './Certifications';
import Achievements from './Achievements';
import "./NavBar.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

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
        <div style={{height: "100vh"}}>
          <nav className="nav">
              <li><Link  className="nav_link,\ nav__brand" to="#">ABeY</Link></li>
              <ul className={active}>
                <li className='nav__item'><Link className="nav_link"  to="/">Home</Link></li>
                <li className='nav__item'><Link className="nav_link"  to="/education">Education</Link></li>
                <li className='nav__item'><Link className="nav_link"  to="/experience">Experience</Link></li>
                <li className='nav__item'><Link className="nav_link"  to="/technical-skills">Technical Skills</Link></li>
                <li className='nav__item'><Link className="nav_link"  to="/certifications">Certifications</Link></li>
                <li className='nav__item'><Link className="nav_link"  to="/achievements">Achievements</Link></li>
              </ul>
              <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
              </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/technical-skills" element={<TechnicalSkills/>} />
          <Route path="/certifications" element={<Certifications/>} />
          <Route path="/achievements" element={<Achievements/>} />
        </Routes> 
      </div>
    </Router>
    );

}

export default NavBar;
