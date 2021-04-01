import React, {useState} from 'react'
import'./login.css'
import {Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core'
import Footer from'../components/Footer'
import DropDown from '../components/DropDown'
import Navbar from '../components/Navbar'
import GlobalStyle from '../globalStyles';
const Login = () => {
   const  [email, setEmail] = useState()
   const  [password, setPassword]=useState()
   const  [loginType, setLoginType] = useState()
   const  [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
     setIsOpen(!isOpen)
   }

    return (
        <>
        <div className="Login-Nav">
          <GlobalStyle />
          <Navbar toggle={toggle} />
          <DropDown isOpen={isOpen} toggle={toggle} />
        </div>
        <div className="Login-Form">
            <div className="Form">
                <div className="form-input">
                    <TextField
                     id="outlined-basic"
                     label="E-mail"
                     variant="outlined"
                     value={email}
                     type="email"
                     onChange={(e) =>setEmail(e.target.value)}
                     />
                     <TextField
                     id="outlined-basic"
                     label="P-word"
                     variant="outlined"
                     value={password}
                     type="email"
                     onChange={(e) =>setPassword(e.target.value)}
                     />    
                </div>
                <div className="select-input">
                    <FormLabel component="legend">Choose Between</FormLabel>
                    <RadioGroup value={loginType} onChange={(e) => setLoginType(e.target.value)}>
                        <FormControlLabel value="client" control={<Radio/>} label="Client" />
                        <FormControlLabel value="artisan" control={<Radio/>} label="Artisan" />
                    </RadioGroup>    
                </div>
                <div className="input-Btn">
                    <Button onClick={Login} variant="outlined">
                        Login
                    </Button>
                </div>
            </div>
        </div>
        <div className="Login-footer">
            <Footer />
        </div>

        </>
    )
}

export default Login;


