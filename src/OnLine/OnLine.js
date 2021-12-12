
import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './OnLine.css'
// Web Development courses
import Front from './WebD/frontend/Frontend'
import Back from './WebD/backend/Backend'
import Base from './WebD/basic/Basic'

// Android Development courses
import C from './AndD/C/C'
import Flutter from './AndD/Flutter/Flutter'
import Java from './AndD/Java/Jave'

//AI courses
import Mathmatics from './AI/Mathmatics/Mathmatics'
import Python from './AI/Python/Python'



export class OnLine extends Component {
    render() {
        return (

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">

            <Tab eventKey="Web Development" title="Web Development"  >
              <Front />
              <Back />
              <Base />
            </Tab>


            <Tab eventKey="Android Development" title=" Android Development "  >
             <C/>
             <Flutter/>
             <Java/>
            </Tab>

            
            <Tab eventKey="artificial intelligence" title="Artificial Intelligence" >
            <Mathmatics/>
            <Python />
            </Tab>

            
            <Tab eventKey="SEO" title="SEO" >
            <Mathmatics/>
            <Python />
            </Tab>


            
            <Tab eventKey="Digetal Markating" title="Digetal Markating" >
            <Mathmatics/>
            <Python />
            </Tab>


            
            <Tab eventKey="For Kids" title="For Kids" >
            <Mathmatics/>
            <Python />
            </Tab>

            
            <Tab eventKey="Programming the controllers" title="Programming the controllers" >
            <Mathmatics/>
            <Python />
            </Tab>
          </Tabs>
        )
    }
}

export default OnLine
