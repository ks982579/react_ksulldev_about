import React, { useContext } from 'react';
import degrees from './details/Degrees';
import "./workcompsstyles.css";
import { MyContext } from "../parts/body";

function EduComp (props){
    const dtls = props.details;
    const [theContext, setTheContext] = useContext(MyContext);

    const divClick = (evnt) => {
        setTheContext(props.details);
    }
    return(
        <div 
        className='component-a-container'
        onClick={divClick}>
            <h3 className="content-company-name">{dtls.level}</h3>
            <h4 className="content-job-title">{dtls.school}</h4>
            <div className="content-dates">
                <h5>Graduation Date: {dtls.gradDate}</h5>
            </div>
            <p>{dtls.summary}</p>
        </div>
    )
}
function FormalEduComp(){
    return(
        <div className="info-container">
            <EduComp details={degrees.actuarial}/>
            <EduComp details={degrees.economics}/>
            <EduComp details={degrees.engineering}/>
        </div>
    )
}

export default FormalEduComp;