import React from "react";

export const Layout = (props) => {

  const { children } = props;

  return (
    <>
      <header>
        <div className="d-flex bg-gradient">
          <div className="d-flex flex-grow-1">
            <nav className="courseTitle">
              <button className="navbar-brand border-0">
                <img src={require("../../harry potter logo.png")} alt="logo" />
              </button>
            </nav>
            <div className="flex-grow-1">
              <div className="ReactTitle ps-3  d-flex align-items-center">
                <img src={require("../../react-2@2x.png")} alt="logo" />
                <h3 className="mb-0">Reactjs Apps with APIs</h3>
              </div>
              <div className="d-flex ps-3 align-items-center">
                <div className="flex-grow-1">
                  <h4>Harry Potter Characters</h4>
                  <p className="pb-0 mb-0">
                    Purpose: This app contains harry potter movie students and professors details will be shown using Harry potter API.
                  </p>
                </div>
                <div className="link me-3">
                  <p className="mb-0 py-0">
                    {" "}
                    <a href="https://hp-api.onrender.com/api/characters">
                    https://hp-api.onrender.com/api/characters
                    </a>
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main role="main" className="container pt-5">
        {children}
      </main>

      <footer className="footer footer-dark">
        <div className="d-flex justify-content-between px-5">
          <div>
            <p>THE BATTLE BETWEEN GOOD AND BAD.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
