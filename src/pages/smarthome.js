import React from 'react'
import Layout from '../components/layout'

const Smarthome = () => <Layout page="smarthome" pageTitle="Smarthome">
  <h1>Lighting setup</h1>
  <h2>Overview</h2>
  <p>Lights can be controlled indvidually or as part of a group. See the lights list below for details.</p>
  <p>To turn a light on or off, say, “Computer, <strong>[light/group]</strong> <strong>[on/off]</strong>.”</p>
  <p> Lights with a 🔅 icon can also be dimmed by saying, “Computer, <strong>[light]</strong> <strong>[brightness]</strong>,” where <strong>[brightness]</strong> is a number from 1–100 indicating the brightness level.</p>
  <h2>General commands</h2>
  <ul>
    <li>“Computer, <strong>all lights on</strong>.”: Turns all lights ON.</li>
    <li>“Computer, <strong>go dark</strong>.”: Turns all lights OFF.</li>
    <li>“Computer, <strong>I’m leaving</strong>.”: Turns most lights off, gives a weather briefing, and activates guard mode. In this mode, lights will occassionally be turned on and off randomly.</li>
    <li>“Computer, <strong>I’m home</strong>.”: Deactivates guard mode.</li>
  </ul>
  <h2>List of groups & lights</h2>
  <p>Groups control several lights and are displayed as purple boxes. Individual lights are displayed as bullet points within each group.</p>
  <section>
    <h2>Main room</h2>
    <ul>
      <li>Dining 🔅</li>
      <li>Spotlight</li>
      <li>Desk</li>
      <li>Nightstand</li>
      <li>Filament</li>
    </ul>
    <section>
      <h3>Couch</h3>
      <ul>
        <li>Couch tall</li>
        <li>Couch short</li>
      </ul>
    </section>
  </section>
  <section>
    <h2>Kitchen</h2>
    <section>
      <h3>Ceiling</h3>
      <ul>
        <li>Entryway</li>
        <li>Kitchen ceiling</li>
      </ul>
    </section>
    <section>
      <h3>Counter</h3>
      <ul>
        <li>Sink</li>
        <li>Stove</li>
      </ul>
    </section>
  </section>
  <section>
    <h2>Bathroom</h2>
    <ul>
      <li>Bathroom 🔅</li>
    </ul>
  </section>
</Layout>

export default Smarthome