import { Link } from 'react-router-dom';
import './login.css'

function Login(){
    return(
    <div className="login">
        <span className="loginTitle">Login here</span>
<form className='loginForm'>
    <label>Email</label>
    <input className='loginInput' type="text" placeholder='Enter email'/>
    <label>Password</label>
    <input className='loginInput' type="password" placeholder='Enter password'/>
    <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
            <Link className='link' to='/register'>Register</Link>
            </button>
    </div>
)}

export default Login;