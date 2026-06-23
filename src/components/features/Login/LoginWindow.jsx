import "./LoginWindow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLogin } from "@hooks/auth/login";
import { verifyLoginData } from "@modules/auth/verifyLoginData";
import { toast } from "react-toastify";

export const LoginWindow = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser } = useLogin();

    const handleForm = async (e) => {
        e.preventDefault();

        // Validamos que los datos sean correctos antes de enviarlos al login
        const validation = verifyLoginData(email, password);

        if (!validation.success) {
            toast.error(validation.message);
            return;
        }

        // Intentamos realizar el login
        const result = await loginUser(email, password);

        if (!result.success) {
            toast.error(result.error.message);
            return;
        }

        toast.success("Bienvenido/a");
    };

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <>
            <div className="login__title__container">
                <img className="login__title__img" src="/images/logo_2.png" />
                <h1 className="login__title"><span className="login__title__span">Paradox</span>Point Store</h1>
            </div>
            <div className="login__window__bg">
                <form className="login__window" onSubmit={handleForm}>
                    <h2 className="login__window__title">Iniciar Sesion</h2>
                    <div className="login__window__inputs__container">
                        <div className="login__window__input__container">
                            <div className="login__window__input__icon__container">
                                <FontAwesomeIcon icon={faUser} className="login__window__input__icon" />
                            </div>
                            <input type="email" className="login__window__input" placeholder="Usuario" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className="login__window__input__container">
                            <div className="login__window__input__icon__container">
                                <FontAwesomeIcon icon={faLock} className="login__window__input__icon" />
                            </div>
                            <input type="password" className="login__window__input" placeholder="Clave" value={password} onChange={handlePasswordChange} />
                        </div>
                    </div>
                    <button type="submit" className="login__window__button">
                        Iniciar Sesion
                    </button>
                </form>
            </div>
        </>
    )
}