import React from 'react';
import GrandHeader from "../customKit/grandHeader"
import NavigationBar from '../customKit/coolNavBar';

const cssStuff = {
    color: "#123456"
}

function Header(){
    return (
        <div>
            <GrandHeader/>
            <NavigationBar/>
        </div>
    );
}

export default Header;