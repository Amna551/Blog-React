import { Link } from 'react-router-dom';
import './register.css'

function Register(){
    return(
    <div className="register">
        <span className="registerTitle">Register here</span>
<form className='registerForm'>
    <label>Username</label>
    <input className='registerInput' type="text" placeholder='Enter username'/>
    <label>Email</label>
    <input className='registerInput' type="text" placeholder='Enter email'/>
    <label>Password</label>
    <input className='registerInput' type="password" placeholder='Enter password'/>
    <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">
        <Link className="link" to='/login'>Login</Link>
        </button>
    </div>
)}

export default Register;