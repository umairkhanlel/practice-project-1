import React, { Component } from 'react';
import Header from './Header';
import MidContainer from './MidContainer';
import Footer from './Footer';
class App extends React.Component {
  render() { 
    return (
      <>
        <div className="main-container">
          <Header />
          <MidContainer />
          <Footer />
        </div>
      </>
    );
  }
}
 
export default App