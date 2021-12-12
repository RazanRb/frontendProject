import React, { Component, useState } from 'react';

// Components
import data from './dataS4';
import SingleQuestion from './Question';
import './Section4.css'



function Section4() {

  const [questions, setQuestions] = useState(data);

  return (

    <main>
      <div className='container'>


        <h3>Questions and answers</h3>

        
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>


      </div>
    </main>


  );
}

export default Section4;
