import { useState } from "react";


const LoginForm = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [messaggio, setMessaggio] = useState("");

    const gestioneDati =(evento)=>{

        evento.preventDefault();

        setMessaggio("Le credenziali sono  "+email+" password: "+password+"")
    }

    return(
        <>
        <div>LoginForm
            <form>
                <h2>Login</h2>

                <div>
                    <h3>{messaggio}</h3>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" required value={email} 
                    onChange={(e)=>setEmail(e.target.value)}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" required value={password}
                    onChange={(e)=>setPassword(e.target.value)}></input>
                </div>

                <button className="btn btn-dark" onClick={gestioneDati}>Login</button>
            </form>
        </div>
        </>
        
    );

};

export default LoginForm