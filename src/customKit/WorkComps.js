import React, {useContext} from "react";
import Companies from "./details/Companies";
import "./workcompsstyles.css";
import { MyContext } from "../parts/body";

//Unpack companies here
const {RwsMoravia, DFS, Venesky} = Companies

//import objects from ./details directory

function WorkExpComp(props){
    const [theContext, setTheContext] = useContext(MyContext)
    //console.log(props.details)
    const dtls = props.details;
    const divClick = (evt) => {
        setTheContext(props.details)
        //console.log(evt.currentTarget)
        /*for(let eachKey in evt){
            console.log(eachKey+" "+evt[eachKey])
        }*/
    }
    return(
        <div 
            className="component-a-container"
            data-company-name={dtls.dataTag}
            onClick={(evt) => divClick(evt)}>
            <h3 className="content-company-name">{dtls.company}</h3>
            <h4 className="content-job-title">{dtls.jobTitle}</h4>
            <div className="content-dates">
                <h5>from: {dtls.dates.start}</h5>
                <h5>to: {dtls.dates.end}</h5>
            </div>
            <p>{dtls.summary}</p>
        </div>
    );
}

function WorkComponents(){
    return(
        <div className="info-container">
            <WorkExpComp details={RwsMoravia} />
            <WorkExpComp details={DFS} />
            <WorkExpComp details={Venesky} />
        </div>
    )
}

export default WorkComponents;
