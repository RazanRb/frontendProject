import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../dataNav';
import './Navbar.css'
import {Col ,Row ,Container} from 'reactstrap';
import logo from './Bulb logo.png'


const Navbar = () => {



  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);


  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);



  return (
    
    <Container fluid >
            <nav >
              
                  <div className='nav-center'>

                      <div className='nav-header'>
                      <img src={logo} className='logo' alt='logo' />
                        <button className='nav-toggle' onClick={toggleLinks}>
                          <FaBars />
                        </button>

                      </div>




                      {/* links-container */}

                    <div className='links-container' ref={linksContainerRef}>

                          <ul className='links' ref={linksRef}>
                            {links.map((link) => {
                              const { id, url, text } = link;
                              return (
                                <li key={id}>
                                  <a href={url}>{text}</a>
                                </li>
                              );
                            })}
                          </ul>

                    </div>


                    {/* social-icons */}

                    <ul className='social-icons'>
                      {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                          <li key={id}>
                            <a href={url}>{icon}</a>
                          </li>
                        );
                      })}
                    </ul>


                  </div>

            </nav>
    </Container>
 
  );
};

export default Navbar;
