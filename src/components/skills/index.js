import React from 'react'
import './skills.css'
import Photo from '../../assets/kphoto.jpg'

const Skills = () => {
  return (
    <div class="container-skills">
      <div class="left-skills">
        <h2>Skills</h2>
        <ul>
          <li><h3>Backend Technologies</h3></li>
          <ul>
            <li>Java, SpringBoot, MySQL</li>
            <li>NodeJS, MongoDB</li>
          </ul>
          <li><h3>Frontend Technologies</h3></li>
          <ul>
            <li>HTML, Javascript, ReactJS</li>
          </ul>
          <li><h3>Cloud Technologies</h3></li>
          <ul>
            <li>Docker, Amazon Web Services, Jenkins</li>
          </ul>
        </ul>
      </div>
      <div className="right-skills">
        <ul>
          <li><h3>Project Management</h3></li>
          <ul>
            <li>Waterfall and Agile Methodologies</li>
            <li>Experienced with Jira, Trello, Ivanti softwares</li>
          </ul>
          <li><h3>Softwares Used</h3></li>
          <ul>
            <li>Eclipse, VisualStudioCode, Intellij, Notepad editors</li>
            <li>MySQL Workbench, SQLServerManagementStudio, Robo3T database softwares</li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Skills