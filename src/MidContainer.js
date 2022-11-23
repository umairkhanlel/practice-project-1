import React, { Component } from 'react';
import Content from './Content';
import Menu from './Menu';

class MidContainer extends React.Component {
    render() { 
        return (
            <>
                <div className='mid-container'>
                    <Menu />
                    <Content />
                </div>
            </>
        );
    }
}
 
export default MidContainer;