import React, { useState, useEffect } from "react";
import axios from "axios";
// import { loginRoute, registerRoute } from "../utils/apiRoutes";
import { useNavigate } from "react-router-dom";

function Home() {


  return (
    <div>
      <h1> Hello World!</h1>
      <h1> Hello World!</h1>
      <h1> Hello World!</h1>
      <h1> Hello World!</h1>
      <h1> Hello World!</h1>
      <h1> Hello World!</h1>
      <h1> Hello World!</h1>
      <h1> Hello World!</h1>
      <h1> Hello World!</h1>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </div>
  );

}

export default Home;