import { useState } from "react";
import { GlobalStyle, LoginWrap } from "./styled.js";

function App() {
  const userRegex = /^[a-zA-Z\- ]+$/
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const [fullName, setFullName] = useState()
  const [companyName, setCompanyName] = useState()
  const [emailName, setEmailName] = useState()

  const validateName = (name) => {
    return userRegex.test(name)
  }

  const validateEmail = (name) => {
    return emailPattern.test(name) 
  }


  const formVal = document.getElementById("form")
  formVal?.addEventListener("submit", e => {
    e.preventDefault();
    validateName();
    validateEmail()

    })
  // console.log('form', form)

  function handleSubmit(e) {
    // console.log('e', e)
    e.preventDefault();
    validateName(fullName);
    validateName(companyName);
    validateEmail(emailName)
  }


  return (
    <>
    <GlobalStyle />
    <LoginWrap>
      <div className="login">
        <div className="header">
          <p><strong>WORD</strong>LINE</p>
          <p>Create Your Test Account</p>
        </div>
        <form id="form" action="/action_page.php" onSubmit={e => handleSubmit(e)}>
          <div>
            <label for="fname">Full name</label>
            <input 
              type="text" 
              id="fname" 
              name="fname" 
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              />
            <span className={validateName(fullName) ? "validMsg" : "errMsg"} >Please Enter Correct Format</span>
          </div>
          <div>
            <label for="lname">Company name</label>
            <input 
              type="text" 
              id="lname"
              name="lname"
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
            />
            <span className={validateName(companyName) ? "validMsg" : "errMsg"} >Please Enter Correct Format</span>
          </div>
          <div>
            <label for="email">Email address</label>
            <input 
              type="email" 
              id="umail" 
              name="umail"
              value={emailName}
              onChange={e => setEmailName(e.target.value)}
              />
              <span className={validateEmail(emailName) ? "validMsg" : "errMsg"} >Please Enter Correct Format</span>
          </div>
          <div>
            <input className="btn" type="submit" value="Create an account" />
          </div>
        </form>
      </div>
    </LoginWrap>
    </>
  );
}

export default App;
