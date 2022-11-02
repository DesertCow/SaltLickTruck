

import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { LOGIN_Q } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

//* React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Login = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { data }] = useMutation(LOGIN_Q);
  const navigate = useNavigate();

  const [adminStatus, setAdminStatus] = useState(false);

  //* Toastify Config
  const toastOptions = {
    position: "top-center",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  // console.log("\n\n=========== Login ===========")
  // console.log(login)
  // console.log("=========== DATA ===========")
  // console.log(data)

  //* update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

  };

  //* ########################### Button Handle ###########################
  const HandleSubmit = async (event) => {
    event.preventDefault();

    // console.log("Handle Submit!")
    // console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(JSON.stringify(data.login));

      console.log("Admin Status: " + data.login.admin)

      navigate("/main_Menu")
      toast.success("Login Successful!", toastOptions);

      if (data.login.admin) {
        toast.warn("Admin Access!", toastOptions);
        // setAdminStatus({ adminAccess: true })
        // setAdminStatus(true)
        setAdminStatus(true)


        console.log("============== Admin Hook =====================")
        console.log(adminStatus)
        // console.log(this.state.adminState)
      }

    } catch (e) {
      toast.error("Login Failed!", toastOptions);
      // console.error(e);
    }



    // clear form values
    setFormState({
      email: '',
      password: '',
    });

  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    navigate("/register");

  };

  //* Password Recovery
  const passwordRecovery = async (event) => {
    event.preventDefault()

    console.log("PASSWORD Recovery Requested!")
    navigate("/passwordRecovery")

  };


  //* ########################### RETURN ###########################
  return (

    <div className="d-flex flex-column min-vh-100">

      {/* <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1> */}
      {/* <h1 className="text-center pt-4"> Login Page</h1> */}

      <div className="row d-flex align-items-center justify-content-center">

        <div className="col-12 mt-3 text-center ">
          <img src={require("../img/Salt_Lick_Logo.png")}
            className="logo"
            alt="Salt Lick logo" />
        </div>

        <div className="mid col-4 loginBox">

          {/* <h1 className="text-center welcometo">Welcome to</h1> */}
          {/* <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1> */}
          {/* <h1 className="text-center head">Babble Exchange</h1> */}

          <form className="welcome">
            <h1 className="text-center welcometo mt-2">Welcome to</h1>
            <h1 className="homeTitle text-center mt-4"> Salt Lick BBQ</h1>

            <div className="text-center">
              <div className="inputdiv">
                <p className="inputlabel">Email:</p>
                <div className="">
                  <input
                    className="startinputs loginTextBox"
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="inputdiv mt-2">
                <p className="inputlabel">Password:</p>
                <div className="">
                  <input
                    className="startinputs loginTextBox"
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div>
                <p className="passwordRecoveryLink mb-3 mt-2" onClick={(event) => passwordRecovery(event)}>Forgot Password?</p>
              </div>
            </div>
          </form>

        </div >
        <div className="btndiv text-center mt-4 pt-3 loginBox">
          <button className="startbtns" type="button" action="" onClick={(event) => HandleSubmit(event)}>Log in</button>
          <h4 className="h2 m-0 p-0">or</h4>
          <button className="startbtns mb-4" type="button" onClick={(event) => handleSignUp(event)}>Sign up</button>
        </div>
      </div >

    </div>



  )


}

export default Login;

