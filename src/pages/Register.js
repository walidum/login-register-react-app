import React, {useState} from 'react'
import './register.css'
import {Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core'
import Footer from '../components/Footer'
import DropDown from '../components/DropDown'
import Navbar from '../components/Navbar'
import GlobalStyle from '../globalStyles';
import API from "../api/api";

const Register = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [nom, setNom] = useState()
    const [prenom, setPrenom] = useState()
    const [loginType, setLoginType] = useState()
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const send = () => {
        const data = {
            firstName: nom,
            lastName: prenom,
            email: email,
            password: password,
            category: loginType
        }
        console.log(data)
        API.post('/register', data).then(res => {
            alert('inscription OK')
        })
            .catch(err => {
                alert('ERROR')
            })
    }

    return (
        <>
            <div className="register-Login-Nav">
                <GlobalStyle/>
                <Navbar toggle={toggle}/>
                <DropDown isOpen={isOpen} toggle={toggle}/>
            </div>
            <div className="register-Login-Form">
                <div className="register-Form">
                    <div className="register-form-input">
                        <TextField
                            id="outlined-basic"
                            label="Nom"
                            variant="outlined"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Prénom"
                            variant="outlined"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
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
                    <div className="register-select-input">
                        <FormLabel component="legend">Choose Between</FormLabel>
                        <RadioGroup value={loginType} onChange={(e) => setLoginType(e.target.value)}>
                            <FormControlLabel value="client" control={<Radio/>} label="Client"/>
                            <FormControlLabel value="artisan" control={<Radio/>} label="Artisan"/>
                        </RadioGroup>
                    </div>
                    <div className="register-input-Btn">
                        <Button onClick={send} variant="outlined">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
            <div className="register-Login-footer">
                <Footer/>
            </div>

        </>
    )
}

export default Register;


