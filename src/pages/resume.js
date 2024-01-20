import React from 'react'
import Layout from '../components/layout'

const metaDescription = 'Harrison Liddiard’s resumé, including PayPal, The New York Times, hackNY, UCLA Daily Bruin, and UCLA Athletics.';
const Resume = () => <Layout page="resume" pageTitle="Resumé" meta={{ description: metaDescription }}>
  <link href="https://fonts.googleapis.com/css?family=Oxygen:400,700" rel="stylesheet" type="text/css"></link>
  <h1 className="page-title">Resumé</h1>
  <header className="header-resume">
    <h1>Harrison Liddiard</h1>
    <ul id="contact">
      <li><img src="/img/email.png" alt="email icon" />harrison@liddiard.com</li>
      <li><img src="/img/phone.png" alt="phone icon" />(480) 382-0676</li>
      <li><img src="/img/globe.png" alt="globe icon" />harrisonliddiard.com</li>
      <li style={{ marginLeft: '-0.2em' }}><img src="/img/github.png" alt="github icon" />liddiard</li>
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
      <h3 className="position">Technical Product Manager 3 <span className="date">2022 – present</span></h3>
      <h4 className="company">PayPal</h4>
      <ul>
        <li>Launched initiatives that lifted NNAs, revenue, and margin. Increased revenue by many-millions per year.</li>
        <li>Working across domains to design experiments that A/B test improved user guidance in merchant onboarding & activation.</li>
      </ul>
    </div>
    <div className="item">
      <h3 className="position">Software Engineer 1–3 <span className="date">2017 – 2022</span></h3>
      <h4 className="company">PayPal</h4>
      <ul>
        <li>Led experiment implementations on Node.js + React stack that improved onboarding completion rate and product adoption among sellers.</li>
        <li>Won internal and external hackathons for PayPal, recruited, helped plan PayPal’s annual developer conference.</li>
        <li>Developed software that helped 100s of employees meet each other during Covid WFH.</li>
      </ul>
    </div>
    <div className="item">
      <h3 className="position">Software Engineering Intern <span className="date">2016</span></h3>
      <h4 className="company">The New York Times</h4>
      <ul>
        <li>Increased CMS search speed 10x with Elasticsearch.</li>
        <li>Search frontend: reduced complexity, redesigned results display, implemented as-you-type feedback for queries.</li>
        <li>Wrote binary search typographic headline balancer that runs on all nytimes.com article pages.</li>
      </ul>
    </div>
    <div className="item">
      <h3 className="position">Web Developer & Designer <span className="date">2014 – 2017</span></h3>
      <h4 className="company">UCLA Athletics</h4>
      <ul>
        <li>Worked among several departments to prioritize, design, and create webpages for UCLAʼs largest athletic events.</li>
        <li>Authored web style guide, worked with website provider to coordinate full site redesign.</li>
        <li>Developed internal apps with Node.js and Django to automate common tasks.</li>
      </ul>
    </div>
    <div className="item">
      <h3 className="position">Managing Editor: Digital <span className="date">2014 – 2015</span></h3>
      <h4 className="company">Daily Bruin</h4>
      <ul>
        <li>Taught and advised 80+ people in web development, videography, and podcasting at UCLA’s student news organization.</li>
        <li>Coordinated interdepartmental breaking news coverage and collaboration on feature stories.</li>
      </ul>
    </div>
  </section>
  <section className="col right">
    <h2>Education</h2>
    <div className="item">
      <h3 className="school">UCLA <span className="date">2017</span></h3>
      Computer Science and Linguistics, B.A.
    </div>
    <div className="tech-skills">
    <h2>Technical Skills</h2>
      <h3>Experienced <span className="deemphasized">(5+ years)</span></h3>
      <p className="item">JavaScript, React, Node.js, HTML & CSS, Python, Django, API design</p>
      <h3>Familiar <span className="deemphasized">(1–5 years)</span></h3>
      <p className="item">TypeScript, Next.js, SQL, UX design</p>
    </div>
    <h2>Projects</h2>
    <ul className="projects item">
      <li><span className="project-name">Stream Editor</span>: run Unix text manipulation commands interactively on the web</li>
      <li><span className="project-name">Weather/transit board</span>: colorful, informative LED fridge magnet using HTML Canvas</li>
      <li><span className="project-name">Slack Meetups</span>: pair people in a channel for 1:1s and generate visual reports</li>
      <li><span className="project-name">google-sheet-s3</span>: instantly create an API from a spreadsheet</li>
      <li><span className="project-name">kikl.co</span>: shorten links with easy-to-remember URLs</li>
    </ul>
    <h2>Other Skills & Achievements</h2>
    <ul className="skills item">
      <li>FAA-licensed private aircraft pilot & commercial drone operator</li>
      <li>PADI-certified scuba diver</li>
      <li>Black belt in Kenpo</li>
      <li>Eagle Scout</li>
      <li>Yamaha Music School graduate</li>
      <li>Technical communicator</li>
      <li>Photo, audio & video editor</li>
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

export default Resume