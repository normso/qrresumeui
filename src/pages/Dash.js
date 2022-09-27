import "./Dash.css"
import logo from "./logo.png"


export default function Dash(){
    
    return(
        <div className="dashcontainer">
            <div className="dashlogo">
                <img src={logo} style={{width:"100%",height:"100%"}}></img>
            </div>
            <div className="dashes">
                <div className="dhc dhcactive">
                    <span className="dht">Resumes</span>
                </div>
            
            </div>
        </div>
    );
    }
