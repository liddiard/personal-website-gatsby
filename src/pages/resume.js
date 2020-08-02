import React from 'react'
import Layout from '../components/layout'

const metaDescription = 'Harrison Liddiard’s resumé, including PayPal, The New York Times, hackNY, UCLA Daily Bruin, and UCLA Athletics.';
export default () => <Layout page="resume" pageTitle="Resumé" metaDescription={metaDescription}>
  <link href="https://fonts.googleapis.com/css?family=Oxygen:400,700" rel="stylesheet" type="text/css"></link>
  <h1 className="page-title">Resumé</h1>
  <header className="header-resume">
    <h1>Harrison Liddiard</h1>
    <ul id="contact">
      <li><img src="/img/phone.png" alt="phone icon" />+1 480-382-0676</li>
      <li><img src="/img/email.png" alt="email icon" />harrison@liddiard.com</li>
      <li style={{ marginLeft: '-0.2em' }}><img src="/img/github.png" alt="github icon" />liddiard</li>
      <li><img src="/img/globe.png" alt="globe icon" />harrisonliddiard.com</li>
    </ul>
  </header>
  <div
    className="print"
    role="button"
    tabIndex={-1}
    onClick={() => window ? window.print() : null}
    onKeyPress={() => window.print()}
  >
    Print <img src="/img/print.png" alt="print" />
  </div>
  <section className="col left">
    <h2>Work Experience</h2>
    <div className="item">
      <h3 className="position">Software Engineer 1 & 2 <span className="date">2017 – present</span></h3>
      <h4 className="company">PayPal</h4>
      <ul>
        <li>Modernized merchant onboarding stack in React and Node.js.</li>
        <li>Led programs to improve onboarding verification rate to increase net new actives.</li>
        <li>Won internal and external hackathons for PayPal, recruited, helped plan PayPal’s annual developer conference.</li>
        <li>Started a program to help recent college grads meet each other.</li>
      </ul>
    </div>
    <div className="item">
      <h3 className="position">Software Engineering Intern <span className="date">Summer 2016</span></h3>
      <h4 className="company">The New York Times</h4>
      <ul>
        <li>Increased CMS search speed 10x with Elasticsearch.</li>
        <li>Search frontend: reduced complexity, redesigned results display, implemented as-you-type feedback for queries.</li>
        <li>Wrote a binary search typographic headline balancer that runs on all nytimes.com article pages.</li>
      </ul>
    </div>
    <div className="item">
      <h3 className="position">hackNY Fellow, Software Engineering Intern <span className="date">Summer 2015</span></h3>
      <h4 className="company">Wyng</h4>
      <ul>
        <li>Created customizable React components for campaign builder.</li>
        <li>Server-side development in Django, Flask, MongoDB.</li>
        <li>Participated in hackNY Fellows mentorship program learning from NYC founders and civic leaders.</li>
      </ul>
    </div>
    <div className="item">
      <h3 className="position">Web Developer & Designer <span className="date">2014 – 2017</span></h3>
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
        <li>Taught and advised 80+ people in web development, videography, and podcasting at the university newspaper.</li>
        <li>Coordinated interdepartmental breaking news coverage and collaboration on feature stories.</li>
      </ul>
    </div>
  </section>
  <section className="col right">
    <h2>Education</h2>
    <div className="item">
      <h3 className="school">UCLA <span className="date">2017</span></h3>
            B.A., Linguistics and Computer Science
        </div>
    <h2>Technical Skills</h2>
    <ul className="skills item">
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>GraphQL</li>
      <li>Python</li>
      <li>Flask, Django</li>
      <li>HTML, CSS</li>
      <li>User experience design</li>
    </ul>
    <h2>Projects</h2>
    <ul className="projects item">
      <li><span className="project-name">Slack Meetups</span>: pair people in a Slack channel for 1:1 meetups</li>
      <li><span className="project-name">google-sheet-s3</span>: instantly create an API from a spreadsheet</li>
      <li><span className="project-name">Stream Editor</span>: use Unix text manipulation commands interactively on the web</li>
      <li><span className="project-name">MailPDF</span>: physically mail a digital document in under 60 sec</li>
      <li><span className="project-name">kikl.co</span>: shorten links with easy-to-remember URLs</li>
    </ul>
    <h2>Other Skills & Achievements</h2>
    <ul className="skills item">
      <li>Event planning</li>
      <li>Videography, audio & video editing</li>
      <li>Pilot-in-training</li>
      <li>Eagle Scout with Bronze Palm</li>
      <li>Yamaha Music School graduate</li>
      <li>Black belt in Kenpo</li>
    </ul>
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
