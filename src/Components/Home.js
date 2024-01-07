import React from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";
import image from '../Assets/Abey.jpeg';


const  Home = () => {
    return(
        <div className="bg-image in">
            <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Abey</span> <br/>Website Developer</span>
                <p className='introPara'>I am a dedicated Master of Professional Studies in Software Engineering 
                candidate with hands-on experience in software and web application development</p>
                <Link><button class="btn btn-primary btn-lg">Hire me!</button></Link>
            </div>
            <img  src={image} alt='profile' className='bg img-responsive pull-left custom-position'/>
            </section>
        </div>
        
    );
};

export default Home;