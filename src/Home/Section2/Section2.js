import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './Section2.css'
import { Container } from 'reactstrap';
import {Col ,Row } from 'reactstrap'



const Section2 = () => {

          
          const [index, setIndex] = useState(0);
          const { name, job, image, text } = people[index];

          const checkNumber = (number) => {


            if (number > people.length - 1) {
              return 0;
            }
            if (number < 0) {
              return people.length - 1;
            }
            return number;
          };


          const nextPerson = () => {
            setIndex((index) => {
              let newIndex = index + 1;
              return checkNumber(newIndex);
            });
          };


          const prevPerson = () => {
            setIndex((index) => {
              let newIndex = index - 1;
              return checkNumber(newIndex);
            });
          };



          const randomPerson = () => {
            let randomNumber = Math.floor(Math.random() * people.length);
            if (randomNumber === index) {
              randomNumber = index + 1;
            }


            setIndex(checkNumber(randomNumber));
          };



  return (

    <Container>
      <Row>

            {/* Titel */}
        <h1 className="text-center"><span> Our students' comments</span>Created with <i class="fa fa-heart"></i> from<a href="http://grafreez.com"> Grafreez.com</a></h1>

      <article className='review'>


              <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                  <FaQuoteRight />
                </span>
              </div>
              

              {/* details */}
              <h4 className='author'>{name}</h4>
              <p className='job'>{job}</p>
              <p className='info'>{text}</p>

              {/* button prevPerson */}
              <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                  <FaChevronLeft />
                </button>

             {/* button nextPerson */}
                <button className='next-btn' onClick={nextPerson}>
                  <FaChevronRight />
                </button>
              </div>

              {/* button surprise me */}
              <button className='random-btn' onClick={randomPerson}>
                surprise me
              </button>

      
      </article>

      </Row>
    </Container>

  );
};

export default Section2 ;
