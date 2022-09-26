import "./Create.css"
import { useNavigate } from "react-router-dom";


function Template(){
    return(
        <div className="tc">
            <div className="tic" >
                <img style={{width:"100%",height:"100%"}}src="" />
            </div>
            <div className="tnc">
                <span className="tnt">Elegent</span>
            </div>
        </div>
    );
}



function CreateCenter(){
    const navigate = useNavigate();
    function submitForm(){
        navigate("/editor")
    }
    return(
        <div className="ccm">
            <form class="cff">
                <div className="cfmc">
                <label className="clt">File Name</label>
                <input  type="text" className="cfe"/>
                </div>
                <div className="cctc">
                    <Template/>
                    <Template/>
                </div>
                <div class="cfbc">
                    <div onClick={submitForm} class="cfbb">Create</div>
                </div>
            </form>
        </div>
    );
}


export default function Create(){
    return(
        <div className="createcontainer">
        <CreateCenter/>
        </div>
    );
}