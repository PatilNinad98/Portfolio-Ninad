import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Software engineer with total 3 years of Experience working with Microsoft Office 365 suite specialized in SharePoint, Power Platform, Dynamics 365-CSE</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
            B.E. in Computer engineering from Mumbai University.

            ◇ Software development engineer with knowledge of web development, MS Dynamics 365 and MS Office 365 (SharePoint, OneDrive and Power Platform).

            ◇Ceritfied Scrum Master from Scrum alliance org: https://bcert.me/sjrcdmymw

            ◇ Currently working as Dynamics 365 and SharePoint/Power Platform developer :

            • MS Dynamics 365 - Customer service engine development and different customizations.
            • Various SharePoint projects with out of the box functionalities and custom development.
            • Spfx (React) development for dynamic web parts (Carousel, Accordion) and SharePoint custom forms for different departments.
            • Integration of MS Power Automate,  Power Apps with SharePoint, Creation of custom forms from Power App (Canvas app).
            • SP workflows to Power Automate flow conversion (More than 150 flows were converted and developed).
            • SharePoint classic to SharePoint modern conversion and migration project with the ShareGate tool with deep knowledge of migration process.
            • Administration and governance of Power Platform (Power apps, Power Automate and Power BI).
            • Power platform global COE implementation, enhancement and administration.
            • O365 global projects such as policy roll outs for more than 30k users of OneDrive for business.

            ◇ Has hands on experience in Spfx, PnpJs, ReactJs, Fluent UI, JavaScript, TypeScript,  JQuery, Angular and Powershell.

            ◇ Microsoft certified Power Platform fundamentals, Power App Maker, Power Platform functional consultant and Azure fundamentals

          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
