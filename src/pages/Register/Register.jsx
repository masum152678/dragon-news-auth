import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Register = () => {
    
    const { createNewUser, setUser} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("Name")
        const photo = form.get("Photo")
        const email = form.get("Email")
        const password = form.get("Password")
        // console.log({name,photo, email, password})

        createNewUser(email, password)
        .then(result =>{
            const user = result.user
            setUser(user)
            // console.log(user)
        })
        .catch(error =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage)
        })
    }
    return (
        <div>
            <div className="flex justify-center items-center py-14 font-poppins">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
                    <h2 className="text-2xl font-semibold text-center pt-3 pb-0 mb-0">Register Here</h2>
                    <form onSubmit={handleSubmit} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="Name" type="Text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input name="Photo" type="text" placeholder="Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="Email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="Password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <h2 className="text-center pb-2">Already have an account <Link to="/auth/login" className="font-semibold text-red-500">Login</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Register;