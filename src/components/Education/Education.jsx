import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <div className='education'>
        <h1>Education</h1>
        <div className="education-course">
            <h2>B.Tech in Information Technology </h2>
            <div className="education-details">
                <h4>Raipur Institute Of Technology, Chhattisgarh | 2023-2027</h4>
                <ul>
                    <li>Gaining a strong foundation in programming, databases, and web development.</li>
                    <li>Completed projects using Java, MySQL, HTML, CSS, and React.</li>
                    <li>Studied core subjects like Data Structures, DBMS, and Operating System.</li>
                </ul>
            </div>
        </div>

        
        <div className="education-course">
            <h2>Higher Secondary Education – Science Stream </h2>
            <div className="education-details">
                <h4>Rajkiyakrit Uchch Vidyalaya Abhudaynagar, Katoriya, Banka | 2021-2023</h4>
                <p>Percentile - 70.8%</p>
            </div>
        </div>

        <div className="education-course">
            <h2>Certifications</h2>
            <div className="education-details">
                <ul>
                    <li>HTML, CSS - LetsUpgrade</li>
                    <li>Javascript - LetsUpgrade</li>
                    <li>React - LetsUpgrade</li>

                </ul>
            </div>
        </div>

    </div>
  )
}

export default Education