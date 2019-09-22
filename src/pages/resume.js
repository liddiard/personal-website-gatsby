import React from 'react'
import Layout from '../components/layout'

export default () => <Layout page="resume" pageTitle="Resumé">
    <link href="https://fonts.googleapis.com/css?family=Oxygen:400,700" rel="stylesheet" type="text/css"></link>
    <h1 className="page-title">Resumé</h1>
    <header className="header-resume">
        <h1>Harrison Liddiard</h1>
        <ul id="contact">
            <li><img src="/img/phone.png" />+1 480-382-0676</li>
            <li><img src="/img/email.png" />harrison@liddiard.com</li>
            <li style={{ marginLeft: '-0.2em' }}><img src="/img/github.png" />liddiard</li>
            <li><img src="/img/globe.png" />harrisonliddiard.com</li>
        </ul>
    </header>
    <div className="print" onClick={() => window ? window.print() : null}>Print <img src="/img/print.png" alt="print" /></div>
    <section className="col left">
        <h2>Work Experience</h2>
        <div className="item">
            <h3 className="position">Software Engineer <span className="date">2017 – present</span></h3>
            <h4 className="company">PayPal</h4>
            <ul>
                <li>Led frontend development and integration testing of Visa Merchant Category Code collection from PayPal sellers.</li>
                <li>Developing in Node.js, React, Redux.</li>
                <li>Mentored intern, interviewed 20+ candidates, planned events for recent college grads, won 1<sup>st</sup> place in internal hackathon.</li>
            </ul>
        </div>
        <div className="item">
            <h3 className="position">Software Engineering Intern <span className="date">Summer 2016</span></h3>
            <h4 className="company">The New York Times</h4>
            <ul>
                <li>Wrote a typographic headline balancer with binary search that runs on all NYTimes.com article pages.</li>
                <li>Increased CMS search speed 10x with Elasticsearch.</li>
                <li>Search frontend: reduced complexity, redesigned results display, implemented as-you-type feedback for queries.</li>
            </ul>
        </div>
        <div className="item">
            <h3 className="position">hackNY Fellow, Software Engineering Intern <span className="date">Summer 2015</span></h3>
            <h4 className="company">Wyng</h4>
            <ul>
                <li>Accepted into hackNY Fellows mentorship program, learned from NYC founders and civic leaders.</li>
                <li>Created customizable UI components for campaign page builder.</li>
                <li>Developed full stack using React, Django, Flask, MongoDB.</li>
            </ul>
        </div>
        <div className="item">
            <h3 className="position">Web Developer &amp; Designer <span className="date">2014 – 2017</span></h3>
            <h4 className="company">UCLA Athletics</h4>
            <ul>
                <li>Worked among several departments to prioritize, design, and create pages for major athletic events.</li>
                <li>Developed internal applications to improve workflow processes.</li>
                <li>Worked with website provider to coordinate full site redesign, created web style guide.</li>
            </ul>
        </div>
        <div className="item">
            <h3 className="position">Managing Editor, Digital <span className="date">2014 – 2015</span></h3>
            <h4 className="company">Daily Bruin</h4>
            <ul>
                <li>Taught and advised 80+ people in web development, videography, podcasting, and blogging at the university newspaper.</li>
                <li>Coordinated interdepartmental breaking news coverage and collaboration on feature stories.</li>
            </ul>
        </div>
    </section>
    <section className="col right">
        <h2>Education</h2>
        <div className="item">
            <h3 className="school">UCLA <span className="date">2017</span></h3>
            <h4>B.A., Linguistics and Computer Science</h4>
        </div>
        <h2>Technical Skills</h2>
        <div className="item">
            <h4>JavaScript</h4>
            <h4>React</h4>
            <h4>Node.js</h4>
            <h4>GraphQL</h4>
            <h4>HTML / CSS / Sass</h4>
            <h4>Python</h4>
            <h4>Flask / Django</h4>
            <h4>User experience design</h4>
        </div>
        <h2>Projects</h2>
        <div className="item">
            <h4><span className="project-name">MailPDF.online</span> mail a document in under 60 sec. UX design, React, ES6, Node.js.</h4>
            <h4><span className="project-name">typeemoji.com</span> real-time emoji search with tags by relevance. React and ES6.</h4>
            <h4><span className="project-name">Stream Editor</span> interactive Unix text manipulation commands online. Bash, Flask, React.</h4>
            <h4><span className="project-name">kikl.co</span> shorten links with easy-to-remember URLs. Django, PostgreSQL.</h4>
        </div>
        <h2>Achievements &amp; Extracurricular</h2>
        <div className="item">
            <h4>Eagle Scout with Bronze Palm</h4>
            <h4>Black belt in Kenpo</h4>
            <h4>Yamaha Music School graduate</h4>
            <h4>Student pilot, studying for private pilot</h4>
            <h4>Experienced event planner</h4>
            <h4>Videographer & video editor</h4>
        </div>
    </section>
    <div className="more">
        <div className="experience">
            More work experience at <a href="https://linkedin.com/in/liddiard/">linkedin.com/in/liddiard</a>.
        </div>
        <div className="projects">
            More projects at <a href="http://www.harrisonliddiard.com/">harrisonliddiard.com</a>.
        </div>
    </div>
</Layout>
