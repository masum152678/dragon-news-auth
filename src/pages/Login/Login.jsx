import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";

const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        // console.log(email, password)
        userLogin(email, password)
        .then(result =>{
            const user = result.user
            setUser(user)
            navigate(location?.state? location.state : "/")
        })
        .catch((error) => {
            alert(error.code)
          });
    }
    return (
        <div className="flex justify-center items-center py-14 font-poppins">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
                <h2 className="text-2xl font-semibold text-center pt-3 pb-0 mb-0">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <h2 className="text-center pb-2">Don't have account? <Link to="/auth/register" className="font-semibold text-red-500">Register</Link></h2>
            </div>
        </div>
    );
};

export default Login;