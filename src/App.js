
import {useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="rgb(20 34 48)";
      showAlert("Dark mode has been enabled","success")
      document.title="Text Utilities - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success")
      document.title="Text Utilities - Light Mode";
    }
  }
  
  return (
    <>
      <Router>
      <Navbar title="My Money App" toggleMode={toggleMode} mode={mode} about="About Finezy"/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={ <About mode={mode}/>}></Route>
              <Route exact path="/" element={<Landing header="Enter the details below" mode={mode} showAlert={showAlert}/>}></Route>
          </Routes>
      </div>
      </Router>  
    </>
  );
  
}   

export default App;


      
   