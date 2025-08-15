import { useState } from "react";
import './LoginForm.css';
import imgDark from '/workspaces/GeekHaven-WebD-Task1/frontend/src/assets/login-form__img-dark.gif';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // add logic for auth
    };

    return (
        <div className="login-form__container--dark">
            <div className="login-form__img-form-container">
                <div className="login-form__form-container">
                    <form className="login-form__form" onSubmit={handleLogin}>
                    <h1 className = "login-form__Welcome">Welcome Back!</h1>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        className="login-form__input"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        className="login-form__input"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className="login-form__submit"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                </div>
                <div className="login-form__image-container">
                    <img
                        className="login-form__img"
                        src={imgDark}
                        alt="Login Dark"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
