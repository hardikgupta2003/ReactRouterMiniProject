import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icon/ai"
import { useNavigate } from 'react-router-dom'


const LoginForm = ({setIsLoggedIn}) => {


  const navigate = useNavigate();

  const [formData,setFormData]=useState({
    email:"",password:""
    
  })




  const [showPassword,setShowPassword] = useState(false)
  
  function changeHandler(event){
    setFormData((prevData)=> ({
      ...prevData,
      [event.target.name]:event.target.value

    }))
  }
  function submitHandler(event){
    event.preventDefault();
  setIsLoggedIn
}
  return (
   <form onSubmit={submitHandler}>
    <label>
      <p>
        Email Address<sup>*</sup>
      </p>
      <input 
      required
     type='email'
     value={FormData.email}
     onChange={changeHandler}
     placeholder='Enter email id'
     name='email'
      
      />
    </label>

    <label>
      <p>
        Password <sup>*</sup>
      </p>
      <input 
      required
      type={
        showPassword? ("text") : ("password")
        }
         onChange={changeHandler}
         placeholder='Password'
         value={FormData.password}
         name='password'/>
         <span onClick={() => setShowPassword((prev)=> !prev)}>
          {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
         </span>

         <Link>
         <p>
          Forgot password?
          </p>
          </Link>
    </label>

<button > 
  Sign In
</button>
   </form>
  )
}

export default LoginForm