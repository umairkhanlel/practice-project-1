import React, { Component } from 'react';
class Menu extends React.Component {
    render() { 
        return (
            <>
               <ul className="menu">
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">ABOUT US</a>
                    </li>
                    <li>
                        <a href="#"> SERVICES</a>
                    </li>
                    <li>
                        <a href="#"> CONTACT US</a>
                    </li>
                    <li>
                        <a href="#"> OUR PARTNERS</a>
                    </li>
                    <li>
                        <a href="#">NEWS</a>
                    </li>
                </ul> 
            </>
        );
    }
}
 
export default Menu;