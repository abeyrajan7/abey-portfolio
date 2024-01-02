import React from 'react';
import Card from '../Cards/Card';
import SchoolImage from '../Assets/Girideepam.jpg'
import CollegeImageB from '../Assets/Saintgits.jpg'
import CollegeImageM from '../Assets/UMBC.jpg'
import BackgroundImage from '../Assets/background.jpg'
import '../Education.css'

const Education = () => {
    return (
        <div className='education-page'>
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
        </div>
    );
};

export default Education;