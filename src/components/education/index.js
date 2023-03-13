import React from "react";
import './education.css'
const Education = () => {
    return (
        <div className="container-education">
            <h2>Educational Background</h2>
            <ul>
                <h3>Bachelor's Degree</h3>
                <li>University : Jawaharlal Nehru Technological University</li>
                <li>Year : August - 2015 TO July - 2019</li>
                <li>Percentage : 70%</li>
                <li>Branch : Computer Science & Engineering</li>
            </ul>
            <ul>
                <h3>Intermediate</h3>
                <li>College : Narayana Junior College</li>
                <li>Year : June - 2013 TO July - 2015</li>
                <li>Percentage : 92%</li>
            </ul>
            <ul>
                <h3>SSC</h3>
                <li>School : S.T Annes English Medium High School</li>
                <li>Passed Year : July - 2012</li>
                <li>Percentage : 72%</li>
            </ul>
        </div>
    )
}

export default Education;