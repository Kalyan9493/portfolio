import { render } from "@testing-library/react";
import React from "react";
import './experience.css'


const Experience = () => {
    return (
        <div className="container-experience">
            <div className="left-experience">
                <h2>Experience</h2>
                <h3>Company : Omniwyse Technologies</h3>
                <h3>Position : Software Engineer (July-2020 To Present)</h3>
                <ul>
                    <h3>Project - 4 : Genfare</h3>
                    <li><b>Description:</b> This is a SAAS project to bus transport management in some cities in the USA. My
                        part of this project is to reduce the maintenance cost by configuring the ticket vending machines
                        from the website using the IOT services.</li>
                    <li><b>Technologies Used:</b> Java, Spring, Thymleaf, Mysql.</li>
                </ul>
                <ul>
                    <h3>Project - 3 : ShareCare</h3>
                    <li><b>Description:</b> This project comes under the health sector. My part of this project is to develop a
                        new module called care guides, which helps the user to follow the health instructions provided by
                        the curator.</li>
                    <li><b>Technologies Used:</b> java, spring boot, node js, mariadb.</li>
                </ul>
                <ul>
                    <h3>Project - 2 : Wisereads</h3>
                    <li><b>Description:</b> This is a school management project. My part of this project is to introduce a new
                        module called worksheets for students for their practice and daily tests and I converted the same
                        module to conduct the interview tests in the company.</li>
                    <li><b>Technologies Used:</b> spring boot, mysql, diesel norm, vue js, git, aws.</li>
                </ul>
                <ul>
                    <h3>Project-1 : WysePlus</h3>
                    <li><b>Description:</b> This is a virtual platform between the doctors and patients. My part in this project is
                        to introduce the organization's module for taking the appointments for hospitals and diagnostic
                        centers.</li>
                    <li><b>Technologies Used:</b> node js, mongodb, git , aws.</li>
                </ul>
            </div>

            <div className="right-experience">
                <h3>Company : Omniwyse Technologies</h3>
                <h3>Position : Intern (Nov - 2019 To May-2020)</h3>
                <ul>
                    <h3>Project-2 : Announcements</h3>
                    <li><b>Description:</b></li>
                    <li> Announcements are used to make the announcement for the people who are part of the
                        organization.</li>
                    <li>We can create groups and send the message within groups, scheduling the
                        announcement is also one of the features.</li>

                </ul>
                <ul>
                    <h3>Project-1 : E-commerce website</h3>
                    <li><b>Description:</b></li>
                    <li>Online shopping application is the e-commerce site that consists of products for
                        purchase, Cart feature is implemented, transaction feature also implemented.</li>
                    <li> Designed and Developed the application using Java, SpringBoot, JPA, MySQL as
                        backend services.</li>
                    <li>Developed frontend using html, css, javascript, ajax, jQuery.</li>
                </ul>

            </div>
        </div>
    )
}

export default Experience