import "./Main.css"
import Content from "./Content"
import { useNavigate } from "react-router-dom";
export default function Main(){
    const navigate = useNavigate();
    function test(){
        navigate("/create")
    }
    
    return(
        <div className="mcontainer">
            <div className="contentdcontainer">
            <h2 classname="contenttext">
                You have no resume stored.
            </h2><br/>
            <button onClick={test} className="but"> Create One</button>
        </div>
        </div>
    );
}