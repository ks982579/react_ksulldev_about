import React, {useState, useContext, createContext} from "react";
import { MyContext } from "../parts/body";
import { ListContext } from "../parts/body";
import "./ContentInfoStyles.css"

function BlandOutput(){
    return(
        <>
            <h3>Please make a section from above</h3>
        </>
    )
}

function WorkSpecific(props){
    let data = props.details

    //Check if the current prop is the correct type
    if(data.type !== "work"){
        return <h1>Please make a new selection</h1>;
    }
    let rpbly = [];
    let keyVal = 1;
    for(let eachThing of data.responsibility){
        rpbly.push(<li key={keyVal}>{eachThing}</li>)
        keyVal++;
    }
    return(
        <>
            <h3 className="cont-company-name">Company: {data.company}</h3>
            <h4 className="cont-job-title">Job Title: {data.jobTitle}</h4>
            <h4 className="cont-dates">from {data.dates.start} to {data.dates.end}</h4>
            <p>{data.description}</p>
            <ul className="res-list">{rpbly}</ul>
        </>
    )    
}
function FormalEduSpecific(props){
    let data = props.details

    //Check if the current prop is the correct type
    if(data.type !== "degrees"){
        return <h1>Please make a new selection</h1>;
    }
    let points = [];
    return(
        <>
            <h3 className="cont-company-name">{data.level}</h3>
            <h4 className="cont-job-title">{data.school}</h4>
            <h4 className="cont-dates">Graduation Date: {data.gradDate}</h4>
            <p>{data.description}</p>
            <ul className="res-list">{points}</ul>
        </>
    )
}

function SpecificOutput(){
    const [listContext, setListContext] = useContext(ListContext);
    const [theContext, setTheContext] = useContext(MyContext);
    let returnedJSX = (<h2>Hello</h2>)
    if(listContext === "work"){
        returnedJSX = <WorkSpecific details={theContext}/>
    } else if(listContext === "formalEdu") {
        returnedJSX = (<FormalEduSpecific details={theContext}/>)
    } else {
        returnedJSX = (<h1>Perhaps an error has occured</h1>)
    }
    return (
        <>{returnedJSX}</>
    )
}

function ContentInfo(){
    const [theContext, setTheContext] = useContext(MyContext);
    //console.log(theContext)
    let returnedJSX;
    if(theContext ==""){
        returnedJSX = <BlandOutput/>;
    } else {
        returnedJSX = <SpecificOutput />
    }
    return (
        <div className="cont-reset">
            {returnedJSX}
        </div>
    );
}

export default React.memo(ContentInfo);