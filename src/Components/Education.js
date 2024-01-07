import React from 'react';
import PortfolioCard from '../Cards/PortfolioCard';
import SchoolImage from '../Assets/Girideepam.jpg'
import CollegeImageB from '../Assets/Saintgits.jpg'
import CollegeImageM from '../Assets/UMBC.jpg'
import BackgroundImage from '../Assets/background.jpg'
import Cards from '../Cards/Cards';


import '../Education.css'

const Education = () => {
    return (
        <Cards/>
    // <div className="education-page" style={{display: 'flex', flexDirection: 'row'}}>
    //     <PortfolioCard
    //             title='Girideepam Bethany Central School'
    //             imageUrl={SchoolImage}
    //             body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
    //         />
    //     <PortfolioCard
    //             title='Saintgits College of Engineering'
    //             imageUrl={CollegeImageB}
    //             body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
    //         />

    //     <PortfolioCard
    //             title='University of Maryland Baltimore County'
    //             imageUrl={CollegeImageM}
    //             body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
    //         />
      /* <div className="row justify-content-around">
        <div className="col-md-4 card">
            <Card
                title='Girideepam Bethany Central School'
                imageUrl={SchoolImage}
                body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
            />
        </div>
        <div className="col-md-4 card">
        <Card
                title='Girideepam Bethany Central School'
                imageUrl={CollegeImageB}
                body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
            />
        </div>
        <div className="col-md-4 card">
        <Card
                title='Girideepam Bethany Central School'
                imageUrl={CollegeImageM}
                body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
            />
        </div>
      </div> */
    // </div>
        
        /* <div className='education-page'>
            <Card
                title='Girideepam Bethany Central School'
                imageUrl={SchoolImage}
                body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
            />
            <Card
                title='Girideepam Bethany Central School'
                imageUrl={CollegeImageB}
                body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
            />
            <Card
                title='Girideepam Bethany Central School'
                imageUrl={CollegeImageM}
                body='BETHANY HILLS, VADAVATHOOR P.O KOTTAYAM - 686010. +91 7356550952 , +91 9207458515 · hmgirideepam@gmail.com ,'
            />
        </div> */
    );
};

export default Education;