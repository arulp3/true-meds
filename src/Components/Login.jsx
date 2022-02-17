import React from 'react'
import { TextField, Button, FormControl } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { requestOtp, requestLogin } from '../features/article-slice'
import { useNavigate} from 'react-router-dom'


function Login() {
  const count = useSelector((state) => state.article.phoneNumber)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [number, setnumber] = React.useState()
  const [otp, setotp] = React.useState()
  const [login, setlogin] = React.useState(false)
  

  const hello = ()=>{
      console.log("Test")
      setlogin(true)
      setotp("")
  }
 

  return (
    <FormControl className='phoneNumberBox'>
     {
         login ? <>
         <h1>{count}</h1> <br />
     <h3>Enter the OTP sent to your phone</h3>
     <TextField
     sx={{color : "white"}}
     value={otp}
       onChange={(e) => setotp(e.target.value)}
       id="outlined-basic"
       label="OTP"
       variant="outlined"
       autoFocus
     />
     <Button
       
       onClick={() => {
         dispatch(requestLogin(otp));
         navigate('/home')
       }}
       variant="contained"
       color="primary"
       sx={{
         color: 'primary',
       }}
     >
       Request OTP
     </Button>
         </> 
         :
         <>
          <h1>{count}</h1> <br />
      <h3>Enter your phone number to login</h3>
      <TextField
        onChange={(e) => setnumber(e.target.value)}
        id="outlined-basic"
        label="Phone number"
        variant="outlined"
      />
      <Button
        
        onClick={() => {
          dispatch(requestOtp(number));
          hello()
        }}
        variant="contained"
        color="primary"
        sx={{
          color: 'primary',
        }}
      >
        Enter number
      </Button>
          </>
     }
    </FormControl>
  )
}

export default Login
