import React from "react";
import "./coolNavBar.css";

function NavigationBar(){
    return (
        <nav className="cool-nav-bar">
            <ul className="nav-list">
                <li>
                    <a href="https://www.ksulldev.space">Home</a>
                </li>
                <li>
                    <a href=".">About</a>
                </li>
                <li>
                    <a href="https://www.ksulldev.space/projects/">Projects</a>
                </li>
                <li>
                    <a href="https://www.ksulldev.space/blog/">Blog</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;