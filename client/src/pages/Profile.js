
import React, { useState } from "react";
import { PASS_UPDATE, EMAIL_UPDATE } from '../utils/mutations';
import { useMutation } from '@apollo/client';

//* Component Import
import NavFooter from '../components/NavFooter';
import LoadingSplash from '../components/LoadingSplash';


function Profile() {

  const [emailState, setEmailState] = useState({ email: '' });
  const [passwordState, setPasswordState] = useState({ password: '', confirm: '' });

  const [updatePass, { passData }] = useMutation(PASS_UPDATE);
  const [updateEmail, { emailData }] = useMutation(EMAIL_UPDATE);

  let userEmail = "tryncatchmeslipin@gmail.com"
  let userName = "Slippy Toad"

  //* update state based on form input changes
  const handleEmailChange = (event) => {
    const { name, value } = event.target;

    // console.log("New Email = " + value)
    // console.log("Name = " + name)

    setEmailState({
      ...emailState,
      [name]: value,
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

    const { emailData } = await updatePass({
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

    const { passData } = await updateEmail({
      variables: { ...passwordState },
    });

    console.log(passData)

  }

  return (
    <div>

      <h1 className="px-4 pt-4 text-center cartTitle">Welcome</h1>
      <h1 className="px-4 pt-4 text-center cartTitle">{userName}</h1>
      <hr></hr>
      <div className="text-center">
        <img src={require("../img/TempUserPic.jpg")}
          className="userProfilePicture"
          alt="User Profile Pictur3" />
      </div>
      <hr></hr>
      <div className="mt-4 mb-1 text-center profileUserInfo">
        {/* <h3 className="mb-4">Name: {userName}</h3> */}
        <h1 className="mb-4 text-center profileUserInfo">Update Email</h1>
      </div>
      {/* <hr></hr> */}
      <div className="mx-4 text-center">
        <h3 className="emailUserInfo my-3">Email: {userEmail}</h3>
        <input type="email" className="form-control profileInputBox" id="updatedEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" onChange={(e) => handleEmailChange(e)}></input>
        <button type="button" className="btn btn-success mt-3 text-center" onClick={(event) => HandleEmailSubmit(event)}>Update Email</button>
      </div>
      <hr></hr>
      <div className="mx-5 mb-5 text-center">
        <h1 className="p-2 px-4 pt-4 text-center profileUserInfo">Update Password</h1>
        <input type="email" className="form-control profileInputBox m-2" id="updatePassword" aria-describedby="emailHelp" placeholder="New Password" name="password" onChange={(e) => handlePasswordChange(e)}></input>
        <input type="email" className="form-control profileInputBox m-2" id="updatePassword" aria-describedby="emailHelp" placeholder="Confirm Password" name="confirm" onChange={(e) => handlePasswordChange(e)}></input>
        <button type="button" className="btn btn-success mt-3 text-center" onClick={(event) => HandlePasswordSubmit(event)}>Update Password</button>
      </div>
      <hr></hr>


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