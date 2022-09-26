import "./Main.css"
import Nav from "./Nav"
import Content from "./Content"
export default function Main(){
    return(
        <div className="container">
            <Nav/>
            <Content/>
        </div>
    );
}