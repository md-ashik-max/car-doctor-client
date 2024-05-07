import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import loginSVG from '../../assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const {signIn}=useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(email,password);
        signIn(email,password)
        .then(()=>{
            // const loggedInUser = result.user
            // console.log(loggedInUser);
            navigate(location?.state ? location.state : "/")
            Swal.fire({
                icon: "success",
                title: "User Login successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return (
        <div className='md:flex items-center my-12'>
            <div className='md:w-1/2'>
                <img src={loginSVG} alt="" />
            </div>
            <div className="border-2 md:w-1/2 rounded-xl p-8">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <input className="btn hover:bg-[#FF3811] text-xl hover:text-white bg-transparent text-black" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col items-center space-y-6'>
                        <h5 className='text-xl font-bold'>Or Sign In with</h5>
                        <div className='flex gap-4'>
                            <button className='btn btn-circle text-xl text-[#0A66C2]'><FaFacebookF /></button>
                            <button className='btn btn-circle text-xl text-[#0A66C2]'><FaLinkedinIn /></button>
                            <button className='btn btn-circle text-xl'><FcGoogle /></button>
                        </div>
                        <h5>Have an account? <Link to='/register' className='text-xl font-bold text-[#FF3811]'>Sign In</Link></h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;