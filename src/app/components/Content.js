// src/app/Content.js
import React from 'react';
import "../content.css"

function Content() {
  return (
    <div className="content">
      <section id="section1">
        <h2>About</h2>
        <p>This is the About section.</p>
      </section>
      <section id="section2">
        <h2>Projects</h2>
        <p>This is the Projects section.</p>
      </section>
      <section id="section3">
        <h2>Fun Facts</h2>
        <p>This is the Fun Facts section.</p>
      </section>
      <section id="section4">
        <h2>Contact</h2>
        <p>This is the Contact section.</p>
      </section>
    </div>
  );
}

export default Content;
