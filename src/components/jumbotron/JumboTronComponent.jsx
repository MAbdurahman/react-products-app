import React, { Component } from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import './JumboTronComponent.css';


export default class JumboTronComponent extends Component {
   constructor(props) {
      super(props);

   }
   render() {
      return (
         <Container>
            <Jumbotron>
               <h1>React Products App</h1>
               <p>{this.props.children}</p>
               <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to feature content or information.
               </p>
               <p>
                  <Button
                     variant='primary'
                  >
                     Learn more
                  </Button>
               </p>
            </Jumbotron>
         </Container>
      );
   };
};
