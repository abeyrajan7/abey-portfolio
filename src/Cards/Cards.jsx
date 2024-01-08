import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import SchoolImage from '../Assets/Girideepam.jpg';
import CollegeImageB from '../Assets/Saintgits.jpg';
import CollegeImageM from '../Assets/UMBC.jpg';
import './Cards.css';
import { Col, Row } from 'react-bootstrap';

const Cards = () => {
  const initialShowMoreStates = [false, false, false];
  const [showMoreStates, setShowMoreStates] = useState(initialShowMoreStates);

  const toggleShowMore = (index) => {
    const newStates = [...showMoreStates];
    newStates[index] = !newStates[index];
    setShowMoreStates(newStates);
  };

  return (
    <div className="container container-fluid back-ground">
      <Row>
        <Col md={12} className="d-flex justify-content-start institutes-card">
          <PortfolioCard
            title='Girideepam Bethany Central School'
            imageUrl={SchoolImage}
            body='Enrolled in the Maths-Computer stream at GBCS, completing the 11th and 12th grades with a specialized curriculum comprising Mathematics, Physics, Chemistry, and Computer Science. Demonstrated proficiency in analytical thinking, problem-solving, and programming languages within the Computer Science discipline. Achieved excellence in Mathematics and applied scientific principles to real-world scenarios in Physics and Chemistry. Actively participated in academic projects and extracurricular activities, fostering a well-rounded skill set and a passion for the intersection of mathematics and technology. Graduated with honors, showcasing a comprehensive understanding of the Maths-Computer stream.'
            showMore={showMoreStates[0]}
            toggleShowMore={() => toggleShowMore(0)}
          />
          <PortfolioCard
            title='Saintgits College of Engineering'
            imageUrl={CollegeImageB}
            body='Pursued a Bachelor of Technology (B.Tech) in Computer Science and Engineering at Saintgits College of Engineering. Acquired in-depth knowledge and practical skills in a diverse range of subjects, including algorithms, data structures, software engineering, and computer networks. Engaged in hands-on projects, fostering a deep understanding of programming languages and system architecture. Collaborated with peers on innovative solutions and embraced emerging technologies within the field. Successfully completed internships or relevant experiences, gaining real-world insights into the application of theoretical concepts. Demonstrated commitment to academic excellence, receiving recognition for outstanding performance. The college education laid a solid foundation for a dynamic career in the ever-evolving field of Computer Science and Engineering.'
            showMore={showMoreStates[1]}
            toggleShowMore={() => toggleShowMore(1)}
          />
          <PortfolioCard
            title='University of Maryland Baltimore County'
            imageUrl={CollegeImageM}
            body='Currently enrolled in the Masters of Professional Studies program in Software Engineering at the esteemed University of Maryland Baltimore. Embracing an advanced curriculum that delves into cutting-edge software engineering concepts, methodologies, and industry best practices. Engaged in rigorous coursework that includes topics such as software architecture, development methodologies, and software project management. Actively participating in collaborative projects, fostering teamwork, and honing practical skills crucial for the dynamic software engineering landscape. Leveraging opportunities for hands-on experiences, internships, or research projects to further enhance knowledge and application of software engineering principles. Committed to achieving a profound mastery of advanced software engineering concepts to excel in the ever-evolving technology sector.'
            showMore={showMoreStates[2]}
            toggleShowMore={() => toggleShowMore(2)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Cards;



