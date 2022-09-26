import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Create from "./pages/create/Create"
import Editor from "./pages/editor/Editor"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/editor" element={<Editor/>}></Route>
    </Routes>
  );
}

export default App;
