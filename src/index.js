import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import {CanvasPixelEffects} from './customKit/grandHeader';

function WebPage(){
  return (
    <React.Fragment>
      <App/>
    </React.Fragment>
  );
}

const DOMRoot = document.getElementById('root');

ReactDOM.render(<WebPage/>,DOMRoot);

const coolHeader = new CanvasPixelEffects("headerCanvas", "About Page");
coolHeader.run()
