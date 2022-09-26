import "./Dash.css"
import logo from "./logo.png"
import document from "./document.png"
import { useNavigate } from "react-router-dom";

export default function Dash(){
    const navigate = useNavigate();
    function test(){
        navigate("/create")
    }
    return(
        <div className="dashcontainer">
            <div className="dashlogo">
                <img src={logo} style={{width:"100%",height:"100%"}}></img>
            </div>
            <div className="dashes">
                <div onClick={test}className="dhc dhcactive">
                    <div className="dhic">
                        <img src={document} style={{width:"100%",height:"100%"}}/>
                    </div>
                    <span className="dht">Resumes</span>
                </div>
                <div className="dhc">
                    <div className="dhic">
                        <img src={document} style={{width:"100%",height:"100%"}}/>
                    </div>
                    <span className="dht">Shared Resumes</span>
                </div>
                <div className="dhc">
                    <div className="dhic">
                        <img src={document} style={{width:"100%",height:"100%"}}/>
                    </div>
                    <span className="dht">Favourites</span>
                </div>
            </div>
        </div>
    );
    }
