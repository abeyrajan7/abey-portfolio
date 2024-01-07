 import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'
import SchoolImage from '../Assets/Girideepam.jpg'
import CollegeImageB from '../Assets/Saintgits.jpg'
import CollegeImageM from '../Assets/UMBC.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Card.css'

class Cards extends Component{
    render() {
        return(
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-start">
                        <PortfolioCard
                            title='Girideepam Bethany Central School'
                            imageUrl={SchoolImage}
                            body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'/>
                        <PortfolioCard
                            title='Saintgits College of Engineering'
                            imageUrl={CollegeImageB}
                            body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'/>
                        <PortfolioCard
                            title='University of Maryland Baltimore County'
                            imageUrl={CollegeImageM}
                            body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
