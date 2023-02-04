import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from "./Register.module.css";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userInput,setUserInput] = useState({
        email:"",
        password:"",
        fullName:""
        
    });
    const {signup,currentUser} = useAuth();
    const history = useNavigate();

    const handleSignup = ()=>{
        setError('');
        setLoading(true);
        signup(userInput).then(
            (ref)=>{
                setLoading(false);
                history('/home');
            }
            ).catch((err)=>{
                setError(err.message);
            setLoading(false);
        })
        setUserInput({
            fullName:"",
            email:"",
            password:""
        });
    }

    useEffect(()=>{
        if(currentUser){
            history('/home')
        }
    },[currentUser,history]);
    console.log(error);
    const setFullName = (event) =>{
        setUserInput((prev)=>{
            return {
                ...prev,
                fullName:event.target.value
            }
        })
    }
    const setEmail = (event) =>{
        setUserInput((prev)=>{
            return {
                ...prev,
                email:event.target.value
            }
        })
    }
    const setPassword = (event) =>{
        setUserInput((prev)=>{
            return {
                ...prev,
                password:event.target.value
            }
        })
    }
    return (
        <>
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {"Create Your Free Account"}
                </div>
                <div className={styles.input}>
                    <div className = {styles.row}>
                        <label className={styles.label}>
                            {"Full Name"}
                            <input type={"text"} placeholder={"Enter your full name"} value={userInput.fullName} onChange={setFullName}></input>
                        </label>
                    </div>
                    <div className = {styles.row}>
                        <label className={styles.label}>
                            {"Email"}
                            <input type={"email"} placeholder={"Enter your email"} value={userInput.email} onChange={setEmail}></input>
                        </label>
                    </div>
                    <div className = {styles.row}>
                        <label className={styles.label}>
                            {"Password"}
                            <input type={"password"} placeholder={"Enter your password"} value={userInput.password} onChange={setPassword}></input>
                        </label>
                    </div>
                </div>
                <div className={styles.btnCont}>
                    <button className={styles.btn} onClick={handleSignup} disabled={loading}>Register</button>
                </div>
                <div className={styles.registerCont}>
                    <div className={styles.alAcc}>{"Already have an account?"}<Link to={"/login"} className={styles.login}>{"Login"}</Link></div>
                </div>
                <div className={styles.privacyCont}>
                    {"By signing up, you agree to our"}<div className={styles.terms}>{"Terms"}</div> {"and"} <div className={styles.terms}>{"Policy"}</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Register;