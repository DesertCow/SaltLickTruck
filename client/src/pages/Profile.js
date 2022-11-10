
import React, { useState } from "react";
import { PASS_UPDATE, EMAIL_UPDATE, LOGIN_Q, NAME_UPDATE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { useNavigate } from "react-router-dom";

//* Component Import
import NavFooter from '../components/NavFooter';
import LoadingSplash from '../components/LoadingSplash';

//* React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import auth from "../utils/auth";


function Profile() {

  const [emailState, setEmailState] = useState({ email: '', id: '' });
  const [passwordState, setPasswordState] = useState({ password: '', confirm: '', id: '' });
  const [nameState, setNameState] = useState({ name: '', id: '' });

  const [updatePass, { passData }] = useMutation(PASS_UPDATE);
  const [updateEmail, { emailData }] = useMutation(EMAIL_UPDATE);
  const [updateName, { nameData }] = useMutation(NAME_UPDATE);
  const [loginTwo, { loginData }] = useMutation(LOGIN_Q);

  const navigate = useNavigate();

  //* Toastify Config
  const toastOptions = {
    position: "top-center",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  let login = Auth.getToken()

  login = JSON.parse(login)

  if (login == null) {

    return (
      <div>
        {/* <LoadingSplash /> */}
        <h1 className="pleaseLogin text-center">Hello,</h1>
        <h1 className="pleaseLogin2 text-center mt-3">Please Login or Create and Account to view your profile page!</h1>
        <div className="loginText text-center">
          <a href="/login">Login</a>
        </div>
        <div className="regsiterLink text-center">
          <a href="/register">Register</a>
        </div>


        <footer className="mt-5">
          {/* <MainFooter /> */}
          <NavFooter />
        </footer>
      </div>

    )

  }



  //* update state based on form input changes
  const handleEmailChange = (event) => {
    const { name, value } = event.target;

    // console.log("New Email = " + value)
    // console.log("Name = " + name)

    setEmailState({
      ...emailState,
      [name]: value,
      id: login.user._id,
    });

    // console.log("Email State = ")
    // console.log(emailState)

  }

  //* update state based on form input changes
  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    // console.log("New Password = " + value)

    setPasswordState({
      ...passwordState,
      [name]: value,
      id: login.user._id,
    });

    // console.log("Password State = ")
    // console.log(passwordState)

  }

  //* update state based on form input changes
  const handleNameChange = (event) => {
    const { name, value } = event.target;

    // console.log("New Password = " + value)

    setNameState({
      ...nameState,
      [name]: value,
      id: login.user._id,
    });

    // console.log("Name State = ")
    // console.log(nameState)

  }


  //* ########################### Button Handle ###########################
  const HandleEmailSubmit = async (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    console.log("New Email Submitted!")
    // console.log(JSON.stringify(emailState))
    console.log("   " + emailState.email)
    // console.log(name)
    // console.log(value)

    const { data2 } = await updateEmail({
      variables: { ...emailState },
    });

    const { data } = await loginTwo({
      variables: { email: emailState.email, password: login.user.password },
    });

    Auth.login(JSON.stringify(data.login))

    toast.success("Email Address Has Been Updated!", toastOptions);

  }

  const HandlePasswordSubmit = async (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    console.log("New Password Submitted!")
    console.log("   Password: " + passwordState.password)
    console.log("   Confirm : " + passwordState.confirm)

    const { passData } = await updatePass({
      variables: { ...passwordState },
    });

    // console.log(passData)

    toast.success("Password Has Been Updated!", toastOptions);

  }

  const HandleNameSubmit = async (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    console.log("New Name Submitted!")
    console.log("   Name: " + nameState.name)

    const { nameData } = await updateName({
      variables: { ...nameState },
    });

    // console.log(nameData)

    toast.success("Name Has Been Updated!", toastOptions);

  }

  const HandleLogoutSubmit = async (event) => {
    event.preventDefault();

    console.log("Logout Requested!")

    toast.success("Logout Has Been Successful", toastOptions);
    navigate("/")
    Auth.logout()
  }

  // console.log()
  // console.log("Customer Name: " + login.user.customerName)
  // console.log(login.user)

  return (
    <div>

      <h1 className="px-4 pt-4 text-center cartTitle">~ Welcome ~</h1>
      <hr className="mb-3 mt-0"></hr>
      <div className="text-center">
        <img src={require("../img/TempUserPic.jpg")}
          className="userProfilePicture"
          alt="User Profile Pictur3" />
      </div>
      <h1 className="mt-4 text-center customerNameCart">{login.user.customerName}.</h1>
      <hr className="m-0" ></hr>
      <div className="mt-3 text-center profileUserInfo">
        {/* <h3 className="mb-4">Name: {userName}</h3> */}
        <h1 className="mb-3 text-center profileUserInfo">Update Name</h1>
      </div>
      {/* <hr></hr> */}
      <div className="mx-4 text-center">
        {/* <h3 className="emailUserInfo my-3">Email</h3> */}

        {/* <h3 className="mt-0 p-2 mb-3">
          <div className="emailUserInfo text-center pt-3 pb-3">{login.user.customerName}</div>
        </h3> */}

        <input type="email" className="form-control profileInputBox" id="updatedName"
          aria-describedby="emailHelp" placeholder="First Name" name="name" onChange={(e) => handleNameChange(e)}></input>
        <button type="button" className="btn btn-success mt-3 text-center" onClick={(event) => HandleNameSubmit(event)}>Update Name</button>
      </div>
      <hr></hr>
      <div className="mt-3 text-center profileUserInfo">
        {/* <h3 className="mb-4">Name: {userName}</h3> */}
        <h1 className="mb-3 text-center profileUserInfo">Update Email</h1>
      </div>
      {/* <hr></hr> */}
      <div className="mx-4 text-center">
        {/* <h3 className="emailUserInfo my-3">Email</h3> */}

        <h3 className="mt-0 p-2 mb-3">
          <div className="emailUserInfo text-center pt-3 pb-3">{login.user.email}</div>
        </h3>

        <input type="email" className="form-control profileInputBox" id="updatedEmail"
          aria-describedby="emailHelp" placeholder="Email Address" name="email" onChange={(e) => handleEmailChange(e)}></input>
        <button type="button" className="btn btn-success mt-3 text-center" onClick={(event) => HandleEmailSubmit(event)}>Update Email</button>
      </div>
      <hr></hr>
      <div className="mx-5 mb-3 text-center">
        <h1 className="p-2 px-4 pt-2 text-center profileUserInfo">Update Password</h1>
        <input type="email" className="form-control profileInputBox m-2" id="updatePassword" aria-describedby="emailHelp"
          placeholder="New Password" name="password" onChange={(e) => handlePasswordChange(e)}></input>
        <input type="email" className="form-control profileInputBox m-2" id="updatePassword" aria-describedby="emailHelp"
          placeholder="Confirm Password" name="confirm" onChange={(e) => handlePasswordChange(e)}></input>
        <button type="button" className="btn btn-success mt-3 text-center" onClick={(event) => HandlePasswordSubmit(event)}>Update Password</button>
      </div>
      <hr className="m-1"></hr>
      <div className="d-flex row m-0 justify-content-center">
        <h1 className="text-center idText p-2">User_ID: {login.user._id}</h1>
        <hr></hr>
        <div className="mb-5 text-center">
          <button type="button" className="btn btn-warning mt-0 mb-2 text-center logoutBTN" onClick={(event) => HandleLogoutSubmit(event)}>Logout</button>
        </div>
      </div>
      <hr></hr>



      <footer className="mt-auto">
        {/* <MainFooter /> */}
        <NavFooter />
      </footer>

      <div>

      </div>

    </div>



  )

}

export default Profile;