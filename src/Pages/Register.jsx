import img from '../assets/others/authentication2.png'
import bgImg from '../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state||'/';
    const { userRegister, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError("Length must be at least 6 characters with an uppercase and lowercase letter.");
      return;
    }
    setError('');
    userRegister(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        e.target.reset();
        navigate(from);
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
