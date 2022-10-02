
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import React, { useState } from "react";

// import useQuery from '@apollo/client';
import { loginRoute } from "../utils/apiRoutes";


import { LOGIN_Q } from '../utils/queries';

// const LOGIN_Q = gql`
//   query Query($email: String!, $password: String!) {
//     login(email: $email, password: $password)
// }
// `;

// import { loginRoute, registerRoute } from "../utils/apiRoutes";

const Login = (props) => {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  const [values, setValues] = useState({ email: "", password: "", accessToken: "VOID" });
  // const [login, { error, data }] = useMutation(LOGIN_USER);
  // const [login, data ] = useQuery(LOGIN_Q, {
  //   variables: {
  //     email: "test123@gmail.com",
  //     password: "test2"
  //   },
  // })

  const { login, data } = useQuery(LOGIN_Q, {
    variables: {
      email: "test123@gmail.com",
      password: "test2"
    },
  })

  const navigate = useNavigate();
  console.log("\n\n=========== Login ===========")
  console.log(login)
  console.log("=========== DATA ===========")
  console.log(data)


  // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };


  // const LoginRequest = async () => {
  //   const { loading, error, data } = await useQuery(LOGIN_Q);
  // };

  //* Used to keep useState method to update Values
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value, 'accessToken': "Test" });
    console.log("VALUES!!!!!!!!!!!!!!!!!!!!!!")
    console.log(values)
  };

  //* ########################### Button Handle ###########################
  const HandleSubmit = async (event) => {
    event.preventDefault();

    console.log("Handle Submit!")

    const { data } = await login({
      variables: { ...values },
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
                <p className="inputlabel">Username:</p>
                <div className="">
                  <input
                    className="startinputs loginTextBox"
                    type="text"
                    id="username"
                    name="username"
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
                <p className="passwordRecoveryLink" onClick={(event) => passwordRecovery(event)}>Forgot Password?</p>
              </div>
            </div>

            <div className="btndiv text-center mt-4">
              <button className="startbtns" type="button" action="" onClick={(event) => HandleSubmit(event)}>Log in</button>
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


// TRASHHHHHHHHHHHHHHHHHHHH



// console.log("Login Submit from Client!")
// console.log("Valid? = " + validateForm() + " || " + JSON.stringify(values))

// if (validateForm()) {
  // const { username, password } = values;

  // const { data } = await axios.post(loginRoute, {
  //   username,
  //   password,
  // });
  // console.log("~~~~ LoginQ ~~~~ ")
  // console.log(LOGIN_Q);
  //* Make Server Request
  // LoginRequest();
  //const { loading, data } = useQuery(LOGIN_Q);
  // const { loading, data } = useQuery(LOGIN_Q);


  // console.log("Login Data: " + JSON.stringify(data))
  // const accessToken = data.accessToken

  // await setSessionToken({ ...sessionToken, "token": "FAKE" });
  // setValues({ ...values, [event.target.name]: event.target.value, 'accessToken': "accessToken" });
  // setValues({ ...values, [event.target.name]: event.target.value, 'accessToken': "accessToken" });

  // console.log("PWT Token: " + accessToken)
  // console.log("~~~~ Session Token ~~~~ ")
  // console.log(sessionToken)
  // console.log(values)


  // if (!accessToken) {
  // toast.error(data.msg, toastOptions);
  // }
  // if (accessToken) {
  // localStorage.setItem(
  //   process.env.REACT_APP_LOCALHOST_KEY,
  //   JSON.stringify(data.user)
  // );
  // toast.success("Login Was Successful", toastOptions);
  // navigate("/main_Menu");
      // }


// function Login() {

//   const navigate = useNavigate();

//   const [values, setValues] = useState({ username: "", password: "", accessToken: "VOID" });
//   // const [sessionToken, setSessionToken] = useState({ token: "" });


//   //TODO: Move to external file... helpers??? and import to cleanup file
//   const validateForm = () => {
//     const { username, password } = values;
//     if (username === "" && password === "") {
//       // toast.error("Username and Password is required.", toastOptions);
//       console.log("ERROR: Username and Password missing")
//       return false;
//     } else if (username === "") {
//       console.log("ERROR: Username missing")
//       // toast.error("Username is required.", toastOptions);
//       return false;
//     } else if (password === "") {
//       console.log("ERROR: Password missing")
//       // toast.error("Password is required.", toastOptions);
//       return false;
//     }
//     else {
//       return true;
//     }
//   };

