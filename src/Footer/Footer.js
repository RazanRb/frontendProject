import React from "react";


// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import './Footer.css'

//icons 
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';



export default function Footer() {
    
  return (


    <div className="footer-clean">
    <footer>

        <Container fluid>

            <Row className="justify-content-center">

                <div className=" col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>


                <div className="col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Legacy</a></li>
                    </ul>
                </div>


                <div className=" col-md-3 item">
                    <h3>Careers</h3>
                    <ul>
                        <li><a href="#">Job openings</a></li>
                        <li><a href="#">Employee success</a></li>
                        <li><a href="#">Benefits</a></li>
                    </ul>
                </div>


                
                <div className="col-lg-3 item social">
                    <a href="#">
                    <FaFacebook />
                    </a>
                    <a href="#">
                    <FaTwitter />
                    </a>
                    <a href="#">
                    <FaLinkedin />
                    </a>
                    <a href="#">
                    <FaBehance />
                    </a>
                    <p className="copyright">Company Name © 2018</p>
                </div>

            </Row>

        </Container>

    </footer>
</div>
  );
}
