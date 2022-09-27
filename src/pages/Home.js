import "./Home.css";
import Navbar from "./Navbar";
import Info from "./Info";
import Login from "./Login"
import Footer from "./Footer"
import { useState } from "react";
export default function Home(){
    const [noti,setNoti]=useState([])
    return (
        
        <div class="maincontainer">
            
            <div class="content">
                <Navbar/>
                <Info/>
                <Login noti={setNoti}/>
            </div>
            <Footer/>
        </div>
        

    );
}