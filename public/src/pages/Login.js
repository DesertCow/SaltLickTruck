
// import { useNavigate } from "react-router-dom";

function Login() {

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
            <h1 className="text-center welcometo">Welcome to</h1>
            <h1 className="homeTitle text-center pt-4"> Salt Lick BBQ</h1>

            <div className="inputdiv">
              <p className="inputlabel">Username:</p>
              <div className="">
                <input
                  className="startinputs"
                  type="text"
                  id="username"
                  name="username"
                  placeholder=""
                // onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="inputdiv">
              <p className="inputlabel">Password:</p>
              <div className="text-center">
                <input
                  className="startinputs"
                  type="password"
                  id="password"
                  name="password"
                  placeholder=""
                // onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="btndiv text-center">
              {/* <button className="startbtns" type="button" action="" onClick={(event) => handleSubmit(event)}>Log in</button> */}
              <h4 className="m-3 h4">or</h4>
              {/* <button className="startbtns m-2" type="button" onClick={(event) => handleSignUp(event)}>Sign up</button> */}
            </div>

          </form>

        </div >
      </div >

    </div>



  )


}

export default Login;