import "./Home.css";
import Navbar from "./Navbar";
import Info from "./Info";
import Login from "./Login"
import Footer from "./Footer"

export default function Home(){
    return (
        <div class="maincontainer">
            <div class="content">
                <Navbar/>
                <Info/>
                <Login/>
            </div>
            <Footer/>
        </div>

    );
}