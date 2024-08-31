import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const App =()=>{
  const [user,setuser]=useState()
  const [pass,setpass]=useState()
  const navigate = useNavigate()
  const handleuser=(evt)=>{
    setuser(evt.target.value)
  }
  const handlepass=(evt)=>{
    setpass(evt.target.value)
  }
  const check=()=>{
    var logindetails= axios.post("http://localhost:5000/login", {"username":user,"password":pass})
    logindetails.then(function(data){
      if(data.data==true){
        navigate("/success")
      }
      else{
        navigate("/fail")
      }
    })
  }
  return(<>
  <div className="container">
  <div className="section">
    <input className="text" onChange={handleuser} type="text" name="username" placeholder="Username"/><br /><br />
    <input className ="text" onChange={handlepass} type="text" name="password" placeholder="Password" /><br /><br />
    <input className="text" type="text" placeholder="Mobile no"/><br /><br />
    <button className="btn1" onClick={check}>Login</button>
  </div>
  </div>
  
  
  
  </>)

}
export default App