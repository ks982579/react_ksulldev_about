import React, {useState, useContext, createContext} from "react"
import WorkComponents from "../customKit/WorkComps";
import FormalEduComp from "../customKit/FormEduComp";
import SideList from "../customKit/SideList";
import ContentInfo from "../customKit/ContentInformation";
import "./bodstyles.css";

function ComponentContainer() {
    const [listContext, setListContext] = useContext(ListContext);
    const [theContext, setTheContext] = useContext(MyContext)
    let choosenJSX = (<h2>Please select and option from the left :)</h2>);
    switch(listContext){
        case "":
            break;
        case "work":
            choosenJSX = <WorkComponents/>;
            break;
        case "formalEdu":
            choosenJSX = <FormalEduComp/>;
            break;
        case "otherEdu":
            choosenJSX = <>Coming Soon...</>;
            break;
        default:
            choosenJSX = (<h3>Must be an Error, Sorry!</h3>)
            break;
    }

    return (
        <div className="components-container">
            {choosenJSX}
        </div>
    );
}



/* ------------------------------------------------ */

export const MyContext = createContext();
export const ListContext = createContext();

function Body() {
    const [theContext, setTheContext] = useState("");
    const [listContext, setListContext] = useState("");
    console.log(listContext)
    return (
        <MyContext.Provider value={[theContext, setTheContext]}>
            <ListContext.Provider value={[listContext, setListContext]}>
                <div className="body-container">
                    <SideList />
                    <ComponentContainer />
                </div>
                <ContentInfo/>
            </ListContext.Provider>
        </MyContext.Provider>
    );
}

export default Body;