
// import { useNavigate } from "react-router-dom";

function Contact() {

  return (

    <div className="d-flex flex-column min-vh-100">

      <h1 className="homeTitle text-center mt-5"> Salt Lick BBQ</h1>
      {/* <h1 className="text-center pt-4"> Contact Page</h1> */}
      <div className="d-flex flex-column align-items-center">
        <div className="row infoRow">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi col bi-mailbox m-4" viewBox="0 0 16 16">
            <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
            <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
          </svg>
          <h1 className="flex-col pb-2 mb-1 companyTitle">Salt Lick BBQ LLC</h1>
          <h1 className="flex-col pb-1">5305 Hardy Blvd</h1>
          <h1 className="flex-col pb-3">Newport Beach, CA 92660</h1>
        </div>
        <div className="infoRow flex-row px-5 pb-5 pt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi col bi-telephone m-4" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          <h1 className="col officeHours mt-2">Office Hours M-F</h1>
          <h1 className="col officeHours">9:00am - 5:00pm</h1>
          <h1 className="col phoneNumber mt-4">(281) 330-8004</h1>
        </div>
        <div className="row d-flex infoRow px-5 p-3 companyEmail">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          <a href="mailto:saltlickfoodtruck@gmail.com" className="col mt-3 mb-2">saltlickfoodtruck@gmail.com</a>
        </div>
      </div>



      {/* <!-- Footer --> */}
      <footer className="mt-auto mb-0">
        <ul className="pb-1 text-center">
          <li>
            <p>Made by 🌵 Desert-Cow 🐄</p>
          </li>
          <li>
            <p>© 2022 Monkey See Monkey Do LLC.</p>
          </li>
        </ul>
      </footer>

    </div>
  )


}

export default Contact;