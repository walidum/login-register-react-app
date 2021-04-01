import React, {useState} from 'react'
import './login.css'
import {Button, TextField} from '@material-ui/core'
import Footer from '../components/Footer'
import DropDown from '../components/DropDown'
import Navbar from '../components/Navbar'
import GlobalStyle from '../globalStyles';
import API from "../api/api";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loginType, setLoginType] = useState()
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const send = () => {
        const data = {
            email, password
        }
        API.post('/login', data)
            .then(res => {
                if (res.data.status) {
                    alert('LOgin OK')
                } else {
                    alert(res.data.msg)
                }
            })
            .catch(err => {
                alert('error')
            })
    }
    return (
        <>
            <div className="Login-Nav">
                <GlobalStyle/>
                <Navbar toggle={toggle}/>
                <DropDown isOpen={isOpen} toggle={toggle}/>
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="P-word"
                            variant="outlined"
                            value={password}
                            type="email"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-Btn">
                        <Button onClick={send} variant="outlined">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
            <div className="Login-footer">
                <Footer/>
            </div>

        </>
    )
}

export default Login;


