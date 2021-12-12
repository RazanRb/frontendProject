import React, { Component } from 'react'

//Component
import './Section3.css'
//Img
import teamImg from './img.jpg'


export class Section3 extends Component {

    render() {

        return (

            <div>
                
				<header className="header">
				<h1 class="header-title masthead">About US</h1>
				</header>


				<main className="main"> 
				<article className="entry entry-lede">

				<img className="entry-img" src={teamImg} alt="A handsome young horse in front of an expansive sky" />
				<div className="entry-content">
				<h1 className="entry-headline primary-headline">We are a team of young people</h1>
				<time className="entry-date meta">January 24, 2021</time>
				<span className="entry-byline meta">from SYRIA</span>
				<p className="entry-summary">We have established this project with one goal, which is to help everyone who wants to learn information technology and seeks to develop himself and increase his information, and for this our site has collected all the available means for learning, you will certainly find the one that suits you with us.</p>
				</div>

				</article>
				</main>


		    </div>
        )
    }
}

export default Section3



