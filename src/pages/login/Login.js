import React, { useEffect, useState } from 'react';
import styles from "./Login.module.css"
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
    const [userInput,setUserInput] = useState({email:"",password:""});

    const setEmail = (event) => {
        setUserInput((prev)=>{
            return {...prev,email:event.target.value};
        })
    }

    const setUserPassword = (event) => {
        setUserInput((prev)=>{
            return {...prev,password:event.target.value};
        })
    }
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const {signin,currentUser} = useAuth();
    const history = useNavigate();

    const handleSignIn = ()=>{
        setError('');
        setLoading(true);
        signin(userInput.email,userInput.password).then(
            ()=>{
                setLoading(false);
                history('/home');
            }
            ).catch((err)=>{
                setError(err.message);
                setLoading(false);
                console.log(err.message);
        })
        setUserInput({
            username:"",
            fullName:"",
            email:"",
            country:"",
            dob:"",
            password:""
        });
    }
    console.log(error);
    useEffect(()=>{
        if(currentUser){
            history('/home')
        }
    },[currentUser,history]);
    return (
        <>
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {"Login to Account"}
                </div>
                <div className={styles.titleDesc}>
                    {"Get access to your music, playlist and account"}
                </div>
                <div className={styles.input}>
                    <label className={styles.label}>
                        {"Email"}
                        <input type={"Email"} placeholder={"Enter your email here"} className={styles.email} value={userInput.email} onChange={setEmail}/>
                    </label>
                    <label className={styles.label}>
                        {"Password"}
                        <input type={"password"} placeholder={"Enter your password here"} className={styles.password} value={userInput.password} onChange={setUserPassword}/>
                    </label>
                </div>
                <div className={styles.forgot}>
                    {"Forgot your password?"}
                </div>
                <div className={styles.btnCont}>
                    <button className={styles.btn} disable={loading.toString()} onClick={handleSignIn}>Login</button>
                </div>
                <div className={styles.registerCont}>
                    <div className={styles.noAcc}>{"Don't have an account?"}<Link to={'/register'} className={styles.register}>{"Register"}</Link></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;