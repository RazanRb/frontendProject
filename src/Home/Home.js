import React, { Component } from 'react'
import Header from './Header/Header'

//Components
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section1T from './Section1T/Section1T';


export class Home extends Component {
    render() {
        return (
            <div>
                
                 <Header />
                 <Section1T />
                 <Section3 />
                 <Section2 />
                 <Section4 />
   
                
            </div>
        )
    }
}

export default Home
