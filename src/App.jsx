import { useState } from 'react';
import './styles.css'

function App() {
  const [email, setEmail] = useState("") //O valor é recebido no email e depois é repassado
  const [password, setPassoword] = useState("")

  return (
    <>
    <div className="container">
      <div className="container-login">
       <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title">Entre ou Cadastre-se:</span>
          
          <div className="wrap-input">
            <input className={email !== "" ? 'has-val input' : 'input'} 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

            <span className="focus-input" data-placeholder="Email" ></span>
          </div>

          <div className="wrap-input">

            <input className={password !== "" ? 'has-val input' : 'input'}
                    type="password"
                    value={password}
                    onChange={e => setPassoword(e.target.value)} />
            <span className="focus-input" data-placeholder="Password" ></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>

              <div className="text-center">
                <span className="txt1">Não possui conta ?</span>
                <a href="#" className="txt2">Criar conta.</a>
              </div>
            </div>
          
          </form>
          
          </div>
          </div>
          </div>
        </>


  );
}

export default App;
