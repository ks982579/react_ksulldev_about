import React from "react";

const canvasCSS = {
    border: "solid 1px #00AAFF",
    width: "800px",
    height: "200px"
}

export default function GrandHeader(){
    /*return (
        <>
            <h1>I Am the Grand Fucking Header Bitch</h1>
            <canvas
                id="headerCanvas"
                width="800"
                height="200"
                style={canvasCSS}
            ></canvas>
        </>
    );*/
    return (
        <h1>About Kevin</h1>
    );
}

/* Pass in Canvas Element and Words, Class should make it move and shit */

/* Create the class and use the "run" method */

export class CanvasPixelEffects {
    pass
    /*
    constructor(canvasId, displayText){
        this.canvasElm = document.getElementById(canvasId);
        this.ctxt = this.canvasElm.getContext('2d')
        this.text = displayText;
    }
    drawText(){
        this.ctxt.font = "bold 24pt Courier New";
        this.ctxt.fillText(this.text, 0,24)
    }
    run(){
        this.drawText(); 
    }*/
}