import React from 'react'
import { Link } from 'react-router-dom';
import './About.scss';

function About() {
  return (
    <div>
        <title>Sanchezroot.wtf</title>
        <div class="wrap">
            <div class="hero">
                <div class="hero_content_wrap">
                    <h1>Your Links, Your Rules</h1>
                    <h4>Manage your identity, brands, and knowledge bases with ease.</h4>
                    <Link to="/login" class="hero--button">Dashboard</Link>
                </div>
            </div>
            <div id="nav_big_text"></div>
            </div>
    </div>
  )
}

export default About;