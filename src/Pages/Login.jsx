import img from '../assets/others/authentication2.png'
import bgImg from '../assets/others/authentication.png'
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

export default function Login() {
    const [disabled,setDisabled]=useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleValidateCaptcha=(e)=>{
        const user_captcha_value=e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
    const location=useLocation();
    const from=location.state||'/';
    const navigate=useNavigate();
    const {userLogin}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        userLogin(email, password)
        .then((result) => {
          console.log(result.user);
          e.target.reset();
          navigate(from);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  return (
    <div style={{
        backgroundImage: `url("${bgImg}")`,
      }} className='flex items-center w-10/12 mx-auto gap-10 p-10 my-20'>
         <Toaster />
        <div className='w-1/2'>
            <img src={img} alt="" />
        </div>
        <div className='w-1/2'>
        <h3 className='text-center text-3xl font-bold'>Login</h3>
        <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="give captcha text here" className="input input-bordered" required />
          <button type='button' className='btn btn-xs my-2'>Validate</button>
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn bg-[#D1A054B3] text-white">Login</button>
        </div>
        <p className='text-[#D1A054B3] text-center'>New here? <Link to='/register'><span className='font-bold'>Create a New Account </span></Link></p>
      </form>
        </div>
    </div>
  )
}
