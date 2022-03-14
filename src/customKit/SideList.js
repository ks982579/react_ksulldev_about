import React, {useState, useContext} from "react";
import { ListContext } from "../parts/body";
import "./SideListStyles.css";

function CustomListItem(props){
    const [listContext, setListContext] = useContext(ListContext);
    const changeRight = (evnt) => {
        setListContext(evnt.currentTarget.getAttribute("data-type"))
    }
    return(
        <>
            <li
            onClick={changeRight}
            data-type={props.data}>{props.text}</li>
        </>
    )
}

function SideList(){
    let [proDisplay, setProDisplay] = useState({display: "none"});
    let [perDisplay, setPerDisplay] = useState({display: "none"});
    
    const toggle_display = (currentDisplay, setNewDisplay) => {
        //console.log(currentDisplay)
        if(currentDisplay === "none"){
            setNewDisplay({display:"block"});
            //console.log("should be set to 'block'")
        } else {
            setNewDisplay({display: "none"});
            //console.log("shold be set to 'none'")
        }
    }
    return (
        <div className="side-list">
            <h2>Categories</h2>
            <ul>
                <li onClick={()=>toggle_display(proDisplay.display, setProDisplay)}>
                    <b>Professional</b>
                </li>
                <li style={proDisplay}>
                    <ul>
                        <CustomListItem data="work" text="Work"/>
                        <CustomListItem data="formalEdu" text="Formal Education"/>
                        <CustomListItem data="otherEdu" text="Other Education"/>
                    </ul>
                </li>
                <li onClick={()=>toggle_display(perDisplay.display, setPerDisplay)}> 
                    <b>Personal</b>
                </li>
                <li>
                    <ul style={perDisplay}>
                        <li data-type="what">Coming Soon...</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SideList;