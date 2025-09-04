import React, { Component } from 'react';


// Importaciones custom, recuerda --> NO SON CHILD
import Navigation from './navigation';
import pageContent from './page-content';
import PageContent from './page-content';

export default class App extends Component {

  render() {
    
    return (
      
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <Navigation />
        <PageContent />
      </div>
    
    );
  }
}