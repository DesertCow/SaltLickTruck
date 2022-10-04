
// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Register() {

  const [values, setValues] = useState({ email: "", password: "", passwordconfirm: "" });

  const [createUser, { error, data }] = useMutation(CREATE_USER);

  const navigate = useNavigate();

  //* Update values when input Changed
  const inputUpdated = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  //TODO: REFACTOR cleaner, input validation solution...
  // const validateSignUp = () => {
  //   const { password, confirmPassword, username, email } = values;

  //   console.log(password + " || " + confirmPassword)

  //   if (password !== confirmPassword) {
  //     // toast.error(
  //     //   "Password and confirm password should be same.",
  //     //   toastOptions
  //     // );
  //     return false;
  //   }

  //   if (username.length < 3) {
  //     // toast.error(
  //     //   "Username should be greater than 3 characters.",
  //     //   toastOptions
  //     // );
  //     return false;
  //   }

  //   if (password.length < 8) {
  //     // toast.error(
  //     //   "Password should be equal or greater than 8 characters.",
  //     //   toastOptions
  //     // );
  //     return false;
  //   }

  //   if (email === "") {
  //     // toast.error("Email is required.", toastOptions);
  //     return false;
  //   }

  //   return true;
  // };





  //* ######################### Button Handle ###########################

  const HandleSignUp = async (event) => {
    event.preventDefault();

    // if (validateSignUp()) {
    if (true) {
      const { email, password } = values;

      // console.log("User Data: " + email + "||" + username + "||" + password + "||" + passwordconfirm);
      console.log("User Data: " + email + "||" + password);

      // const { data } = await axios.post(registerRoute, {
      //   email,
      //   username,
      //   password
      // });

      //* Create New User In Database
      try {
        const { data } = await createUser({
          variables: { ...values },
        });

        // console.log("========================== DATA ==========================")
        // console.log(data);
        var Token = JSON.stringify(data)
        // console.log("========================== TOKEN ==========================")
        Token = String(Token.split(":"))
        Token = Token.split(`"`)
        var finalToken = Token[5]

        Auth.login(finalToken);
        console.log("Account Created!");
        console.log("========================== STORED TOKEN ==========================")
        console.log(Auth.getToken())
        navigate("/main_Menu")
        // const Temp = Auth.getToken()
        // console.log(finalToken + " || " + Temp);

        // if (data.status === false) {
        //   // toast.error("Account Creation Failed!", toastOptions);
        //   console.log("Account Creation FAILED!");
        // }
        // if (data.status === true) {
        //   // toast.success("Account Sign-Up Successful", toastOptions);
        //   console.log("Account Creation PASSED!");
        //   navigate("/main_Menu")
        // }

        // Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
    // let data = "";


  }


  const returnHome = async (event) => {
    event.preventDefault();

    navigate("/");

  };


  //* ########################### RETURN ###########################
  return (

    <div className="d-flex flex-column min-vh-100">

      {/* <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1> */}
      {/* <h1 className="text-center pt-4"> Register Page</h1> */}

      <div className="row d-flex align-items-center justify-content-center">

        <div className="col-12 my-4 text-center ">
          <img src={require("../img/Salt_Lick_Logo.png")}
            className="logo"
            alt="Salt Lick logo" />
        </div>

        <div className="mid col-4 registerBox mt-5">

          {/* <h1 className="text-center startheader">Sign up</h1> */}

          <form className="signup">
            {/* <h1 className="homeTitle text-center mt-4"> Salt Lick BBQ</h1> */}
            <h1 className="text-center welcometo mt-4 mb-5">Create Account</h1>

            <div className="text-center">
              <div className="registerdiv">
                <p className="inputlabel">Email</p>
                <div className="">
                  <input
                    className="startinputs"
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    onChange={(e) => inputUpdated(e)}
                  />
                </div>
              </div>

              <div className="registerdiv mt-5">
                <p className="inputlabel">Password</p>
                <div className="text-center">
                  <input
                    className="startinputs"
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                    onChange={(e) => inputUpdated(e)}
                  />
                </div>
              </div>

              <div className="registerdiv mb-4">
                <p className="inputlabel">Confirm Password</p>
                <div className="text-center">
                  <input
                    className="startinputs"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder=""
                    onChange={(e) => inputUpdated(e)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>


        <div className="btndiv text-center registerBox">
          <button
            className="startbtns mt-4"
            type="button"
            onClick={(event) => HandleSignUp(event)}>Sign Up
          </button>
          <h4 className="h2 m-0 p-0">or</h4>
          <button className="startbtns mb-4" type="button" onClick={(event) => returnHome(event)}>Home</button>
        </div>

      </div>

    </div>

  )


}

export default Register;