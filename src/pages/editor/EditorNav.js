import "./EditorNav.css"
import logo from "./logo.png"

export default function Create(){
    return(
        <div className="edinc">
            <div class="ediimc">
                <img style={{width:"100%",height:"100%"}} src={logo}/>
            </div>
            <div class="edilc">
                <div class="edillc">
                    <a class="edilink">Faq</a>
                    <a class="edilink">About Us</a>
                    <a class="edilink">Support Us</a>
                </div>
                <div class="edilbc">
                    <div class="edilbb">Download</div>
                </div>
            </div>  
        </div>
    );
}