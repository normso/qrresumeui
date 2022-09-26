import { useEffect, useMemo, useState } from "react";
import "./EditorContent.css"

function  Element(p){
    return(
        <form class="ediconformcon">
                <div className="ediconformmc">
                    <label className="ediconformlt">{p.name}</label>
                    <input  type="text" className="ediconforme"/>
                </div>
        </form>
    );
}

function Editab(props){
    function handleTab(){
        props.tab(props.name)
    }
    return(
        <div onClick={handleTab}className="editab ">
            <span className="editabtext ">{props.name}</span>
         </div>
    );
}

function EdicontContent(p){
    return(
        <div className="edicontContent">
            <div className="editabnamewr">
                <span class="editabname">{p.name}</span>
            </div>
            <div className="edicontform">
            <Element name="Name"/>
            <Element name="Phone Number"/>
            <Element name="Links"/>
            </div>
        </div>
    );
}

export default function Create(){
    const [layout,setLayout] = useMemo({})
    const[struc,setStruc] = useState({})
    useEffect(()=>{
        fetch('http://localhost:8080/template/elegant')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
            
                
            })
    },[])
    const [tab,setTab] = useState("")
    console.log(tab)
    return(
        <div className="ediconcontainer">
            <div className="edicontabscontainer">
                <div className="editabs">
                    <Editab name="Basic Info" tab={setTab}/>
                    <Editab name="Education" tab={setTab}/>
                    <Editab name="Skills" tab={setTab}/>
                    <Editab name="Experience" tab={setTab}/>
                </div>
            </div>
            <EdicontContent name={tab} />
        </div>

    );
}