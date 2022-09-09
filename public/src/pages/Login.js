
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { loginRoute, registerRoute } from "../utils/apiRoutes";

function Login() {

  const navigate = useNavigate();

  const [values, setValues] = useState({ username: "", password: "" });


  //TODO: Move to external file... helpers??? and import to cleanup file
  const validateForm = () => {
    const { username, password } = values;
    if (username === "" && password === "") {
      // toast.error("Username and Password is required.", toastOptions);
      console.log("ERROR: Username and Password missing")
      return false;
    } else if (username === "") {
      console.log("ERROR: Username missing")
      // toast.error("Username is required.", toastOptions);
      return false;
    } else if (password === "") {
      console.log("ERROR: Password missing")
      // toast.error("Password is required.", toastOptions);
      return false;
    }
    else {
      return true;
    }
  };

  //* Used to keep useEffect Variable up to date
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Login Submit from Client!")
    console.log("Valid? = " + validateForm() + " || " + JSON.stringify(values))

    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });

      console.log("Login Data: " + JSON.stringify(data))

      if (data.status === false) {
        // toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        // toast.success("Login Was Successful", toastOptions);
        navigate("/main_Menu");
      }
    }

  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    navigate("/register");

  };

  return (

    <div className="d-flex flex-column min-vh-100">

      {/* <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1> */}
      {/* <h1 className="text-center pt-4"> Login Page</h1> */}

      <div className="row d-flex align-items-center justify-content-center">

        <div className="col-12 mt-3 text-center ">
          <img src={require("../img/Salt_Lick_Logo.png")}
            className="logo"
            alt="babble logo" />
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
                <p className="inputlabel">Username:</p>
                <div className="">
                  <input
                    className="startinputs"
                    type="text"
                    id="username"
                    name="username"
                    placeholder=""
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="inputdiv m-3">
                <p className="inputlabel">Password:</p>
                <div className="">
                  <input
                    className="startinputs"
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>

            <div className="btndiv text-center">
              <button className="startbtns" type="button" action="" onClick={(event) => handleSubmit(event)}>Log in</button>
              <h4 className="h2 m-0 p-0">or</h4>
              <button className="startbtns mb-4" type="button" onClick={(event) => handleSignUp(event)}>Sign up</button>
            </div>

          </form>

        </div >
      </div >

    </div>



  )


}

export default Login;