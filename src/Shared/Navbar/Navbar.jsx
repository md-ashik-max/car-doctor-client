import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";


const Navbar = () => {
    const{user , logOut}=useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                icon: "success",
                title: "User Log Out Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .then(error=>console.log(error))
    }

    const links= <>

    <li><NavLink to='/'>Home</NavLink></li>
    {user? <li><NavLink to='/order'>Order</NavLink></li>:''}
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-base-100 h-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-6">
                {
                    user?.email?<button onClick={handleLogOut} className="btn bg-[#FF3811] text-white hover:text-[#FF3811] border-[#FF3811] hover:bg-transparent">Log Out<FaArrowRight></FaArrowRight> </button>:<Link to='/login'><button className="btn btn-outline btn-info">Login</button></Link>
                }
                <button className="btn text-xl text-[#FF3811] bg-transparent border-[#FF3811] hover:bg-[#FF3811] hover:text-white pb-2">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;