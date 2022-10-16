
import React, { useState } from "react";
import { PASS_UPDATE, EMAIL_UPDATE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

//* Component Import
import NavFooter from '../components/NavFooter';
import LoadingSplash from '../components/LoadingSplash';


function Profile() {

  const [emailState, setEmailState] = useState({ email: '', id: '' });
  const [passwordState, setPasswordState] = useState({ password: '', confirm: '', id: '' });

  const [updatePass, { passData }] = useMutation(PASS_UPDATE);
  const [updateEmail, { emailData }] = useMutation(EMAIL_UPDATE);

  let login = Auth.getToken()

  // console.log("TOKEN!!!!!!!!")
  login = JSON.parse(login)
  // console.log(login.user.email)

  // let userEmail = "tryncatchmeslipin@gmail.com"
  // let userName = "Slippy Toad"



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


  //* ########################### Button Handle ###########################
  const HandleEmailSubmit = async (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    console.log("New Email Submitted!")
    // console.log(JSON.stringify(emailState))
    console.log("   " + emailState.email)
    // console.log(name)
    // console.log(value)

    const { emailData } = await updateEmail({
      variables: { ...emailState },
    });

    console.log(emailData)

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

    console.log(passData)

  }

  return (
    <div>

      <h1 className="px-4 pt-4 text-center cartTitle">Welcome</h1>
      {/* <h1 className="px-4 pt-4 text-center cartTitle">{userName}</h1> */}
      <hr></hr>
      <div className="text-center">
        <img src={require("../img/TempUserPic.jpg")}
          className="userProfilePicture"
          alt="User Profile Pictur3" />
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
      <div className="mx-5 text-center">
        <h1 className="p-2 px-4 pt-2 text-center profileUserInfo">Update Password</h1>
        <input type="email" className="form-control profileInputBox m-2" id="updatePassword" aria-describedby="emailHelp"
          placeholder="New Password" name="password" onChange={(e) => handlePasswordChange(e)}></input>
        <input type="email" className="form-control profileInputBox m-2" id="updatePassword" aria-describedby="emailHelp"
          placeholder="Confirm Password" name="confirm" onChange={(e) => handlePasswordChange(e)}></input>
        <button type="button" className="btn btn-success mt-3 text-center" onClick={(event) => HandlePasswordSubmit(event)}>Update Password</button>
      </div>
      <hr></hr>

      <h1 className="text-center idText">User_ID: {login.user._id}</h1>


      <footer className="mt-5">
        {/* <MainFooter /> */}
        <NavFooter />
      </footer>

      <div>

      </div>

    </div>



  )

}

export default Profile;