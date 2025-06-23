import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../../Firbase/Firebase.init";

const Register = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       console.log(userCredential);
      })
      .catch((error) => {
       console.log(error);
      });
  };
  return (
    <div className="card mx-auto mt-10 p-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          Already Have an Account? Please{" "}
          <Link className="text-blue-500 underline" to="/login">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
