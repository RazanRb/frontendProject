import React, { Component } from 'react'

//Component
import Section1A from './Section1A/Section1A'
import Section3 from './Section3/Section3'



export class About extends Component {
    render() {
        return (
            <div>

                <Section1A />
                <Section3 />

            </div>
        )
    }
}

export default About
