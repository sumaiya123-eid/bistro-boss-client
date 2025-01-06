import img from '../assets/others/authentication2.png'
import bgImg from '../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

export default function Register() {
  const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state||'/';
    const { userRegister, userUpdate,googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  
    if (!passwordRegex.test(password)) {
      setError("Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character, with a minimum length of 6.");
      return;
    }
    setError("");
  
    userRegister(email, password)
      .then((result) => {
        return userUpdate(name, photo);
      })
      .then(() => {
        const user = { name, email };
        return axiosPublic.post('/users', user);
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been successfully registered!`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log("Google login successful", result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res =>{
          console.log(res.data);
          navigate('/');
      })
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div style={{
        backgroundImage: `url("${bgImg}")`,
      }} className='flex items-center w-10/12 mx-auto gap-10 p-10 my-20'>
        <Toaster></Toaster>
        <div className='w-1/2'>
        <h3 className='text-center text-3xl font-bold'>Sign Up</h3>
        <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
        </div>
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
          {error && (
              <p className="flex gap-1 text-red-500 font-semibold mt-2">
                <span className="text-xs">{error}</span>
              </p>
            )}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#D1A054B3] text-white">Sign Up</button>
          <button type="button" onClick={handleGoogle} className="btn btn-outline w-full py-2 flex items-center justify-center">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
        </div>
        <p className='text-[#D1A054B3] text-center'>Already registered?<Link to='/login'><span className='font-bold'>Go to log in</span></Link> </p>
      </form>
        </div>
        <div className='w-1/2'>
            <img src={img} alt="" />
        </div>
    </div>
  )
}
