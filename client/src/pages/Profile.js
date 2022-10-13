
import React from "react";


//* Component Import
import NavFooter from '../components/NavFooter';
import LoadingSplash from '../components/LoadingSplash';


function Profile() {


  let userEmail = "tryncatchmeslipin@gmail.com"
  let userName = "Slippy Toad"


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
        <input type="email" className="form-control profileInputBox" id="updatedEmail" aria-describedby="emailHelp" placeholder="Email Address"></input>
        <button type="button" className="btn btn-success mt-3 text-center">Update Email</button>
      </div>
      <hr></hr>
      <div className="mx-5 mb-5 text-center">
        <h1 className="p-2 px-4 pt-4 text-center profileUserInfo">Update Password</h1>
        <input type="email" className="form-control profileInputBox m-2" id="updatedEmail" aria-describedby="emailHelp" placeholder="New Password"></input>
        <input type="email" className="form-control profileInputBox m-2" id="updatedEmail" aria-describedby="emailHelp" placeholder="Confirm Password"></input>
        <button type="button" className="btn btn-success mt-3 text-center">Update Password</button>
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