import "./Navbar.css";
import bg from "./bg.png"
import logo from "./logo.png"
export default function Home(){
    return (
        <div class="nvc">
            <div class="nvimc">
                <img style={{width:"100%",height:"100%"}} src={logo}/>
            </div>
            <div class="nvlc">
                <div class="nvllc">
                    <a class="link">Faq</a>
                    <a class="link">About Us</a>
                    <a class="link">Support Us</a>
                </div>
                <div class="nvlbc">
                    <div class="nvlbb">Go To Home</div>
                </div>
            </div>        
        </div>
        
    );
}