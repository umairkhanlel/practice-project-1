import React, { Component } from 'react';
import Header from './Header';
class MainContainer extends React.Component {
    render() { 
        return (
            <>
                <Header />
                <MidContainer />
            </>
        );
    }
}
export default MainContainer;