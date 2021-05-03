import React from 'react';

const Login = () => {
   return(
    <>
        <div className="container col-4 py-5">
                <h5>Login</h5>
                <form action="">
                    <input type="email" className="form-control my-2" placeholder="Enter Email" />
                    <input type="text" className="form-control my-2" placeholder="Enter Password" />

                    <button type="submit" className="btn btn-success">Register</button>
                </form>
            </div>
    </>
   )
}

export default Login;