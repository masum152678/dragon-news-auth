import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="mr-3 ">
          <img src={userIcon} alt="" />
        </div>
        {
          user && user?.email? <button onClick={logOut} className="bg-black py-2 px-4 rounded text-white">Sign Out</button> :  <Link to="/auth/login" className="bg-black py-2 px-4 rounded text-white">Login</Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
