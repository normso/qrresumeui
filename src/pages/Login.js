import "./Login.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Cacc(){
    const [name,setName] = useState("")
    const [emailid,setEmailid] = useState("")
    const [password,setPassword] = useState("")
    const [emailborder,setEmailborder] = useState("black")
    const [cpassborder,setCpassborder] = useState("black")
    
    function handleName(e){
        setName(e.target.value)
    }

    function handleEmail(e){
        setEmailid(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleConfirmPass(e){
        if (e.target.value != password){
            if (cpassborder != "red"){
                setCpassborder("red")
            }
        }else{
            setCpassborder("black")
        }
    }

    function onClickButton (event) {
        event.preventDefault();
      }

    function submitForm(e){
        //e.target.preventDefault()
        fetch('http://localhost:8080/createacc',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, emailid: emailid,password:password})})
            .then(response => response.json())
            .then((data) => {
                if (data.code!=200){
                    setEmailborder("red")
                }
            })
    }

    return(
        <form onSubmit={submitForm} class="lff">
                <input onChange={handleName} type="text" class="lfe" placeholder="Your Name"/>
                <input onChange={handleEmail} 
                    style={{borderColor:emailborder}}
                    type="text" class="lfe" placeholder="Email Id"/>
                <input onChange={handlePassword} type="text" class="lfe" placeholder="Password"/>
                <input onChange={handleConfirmPass} 
                    style={{borderColor:cpassborder}}
                    type="text" class="lfe" placeholder="Confirm Password"/> 
                {/*<input  class="lfbb" type="submit" placeholder="Submit" value="Submit" />*/}
                <div class="lfbc">
                    <div onClick={submitForm} class="lfbb">Submit</div>
                </div>
            </form>
    );
}

function Logi(p){
    const navigate = useNavigate();
    const [emailid,setEmailid] = useState("")
    const [password,setPassword] = useState("")
    const [border,setBorder] = useState("black")


    function handleEmail(e){
        setEmailid(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }



    function submitForm(){
        fetch('http://localhost:8080/login',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({emailid: emailid,password:password})})
            .then(response => response.json())
            .then((data) => {
                if (data.code!=200){
                    setBorder("red")
                }else{
                    navigate("/dashboard")
                }
            })
    }
    return(
        <form class="lff">
                <input onChange={handleEmail} 
                    style={{borderColor:border}}
                    type="text" class="lfe" placeholder="Email Id"/>
                <input onChange={handlePassword} 
                    style={{borderColor:border}}
                    type="text" class="lfe" placeholder="Password"/>
                <div class="lfbc">
                    
                    <div onClick={submitForm} class="lfbb">Submit</div>
                </div>
            </form>
    );
}

export default function Home(p){
    const [acc,changeAcc]=useState(true)
    
    function logichange(){
        changeAcc(false)       
    }
    function accchange(){
        changeAcc(true)
    }
    
    return (
        <div class="lc">
            <div class="lbc">
                <div onClick={accchange} style={acc === true ? {backgroundColor:"black",color:"aliceblue"}:{backgroundColor:"aliceblue",color:"black"}} class="lbb">Create Account</div>
                <div onClick={logichange} style={acc === false ? {backgroundColor:"black",color:"aliceblue"}:{backgroundColor:"aliceblue",color:"black"}} class="lbb">Login</div>
            </div>
            <div class="lfc">
            <div class="lfcc">
                <span class="lft">{acc === true ? "Create Account":"Get Dive Into"}</span>
            </div>
            {acc === true ? <Cacc/>:<Logi notification={p.setNoti}/>}
            </div>
        </div>
        
    );
}