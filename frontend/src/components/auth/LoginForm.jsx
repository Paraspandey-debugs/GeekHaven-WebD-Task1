import React,{useState} from "react";
import './LoginForm.css';
const LoginForm = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [theme,setTheme] = useState("dark");
    const handleLogin = (e) =>{
        e.preventDefault();
        //add logic for auth
    };
    return(
        <div className={`login-form__container--${theme}`}>
            <form className="login-form__form" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    className="login-form__input"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type ="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                    className="login-form__input"
                    required
                />
                <button className="login-form__submit" type="submit">Login</button>
            </form>
        </div>
    );
};
export default LoginForm;
