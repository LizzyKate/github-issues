import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import logo from "./github.png";

function NavBar() {
  const [display, setDisplay] = useState("none");
  const searchInput = useRef();
  const result = useRef();
  function increaseWidth() {
    gsap
      .timeline({ defaults: { ease: "linear", duration: 0.5, width: "400px" } })
      .to(searchInput.current, {})
      .to(
        result.current,
        {
          display: "block",
          opacity: 1,
        },
        "<"
      );
  }
  function originalWidth() {
    gsap
      .timeline({ defaults: { ease: "linear", duration: 0.5 } })
      .to(searchInput.current, {
        width: "200px",
      })
      .to(
        result.current,
        {
          width: 0,
          opacity: 0,
        },
        "<"
      );
  }

  return (
    <div>
      <div className="nav">
        <div className="first">
          <div className="logo">
            <img src={logo} />
          </div>
          <div
            className="search"
            onFocus={increaseWidth}
            onBlur={originalWidth}
            ref={searchInput}
          >
            <input placeholder="Search or jump to....." />
          </div>
          <div className="link">
            <a href="#">Pull Request</a>
          </div>
          <div className="link">
            <a href="#">Issues</a>
          </div>
          <div className="link">
            <a href="#">Marketplace</a>
          </div>
          <div className="link">
            <a href="#">Explore</a>
          </div>
        </div>
        <div className="second">
          <div className="notify">
            <i className="ri-notification-fill"></i>
          </div>
          <div className="add">
            <i className="ri-add-line"></i>
          </div>
        </div>
      </div>
      <div>
        <div className="result" ref={result} style={{ display: display }}>
          <div className="list">
            <div className="icon">
              <i className="ri-bookmark-fill"></i>
            </div>
            <div className="term">
              <p>Intermine</p>
            </div>
          </div>
          <div className="list">
            <div className="icon">
              <i className="ri-bookmark-fill"></i>
            </div>
            <div className="term">
              <p>Intermine</p>
            </div>
          </div>
          <div className="list">
            <div className="icon">
              <i className="ri-bookmark-fill"></i>
            </div>
            <div className="term">
              <p>Intermine</p>
            </div>
          </div>
          <div className="list">
            <div className="icon">
              <i className="ri-bookmark-fill"></i>
            </div>
            <div className="term">
              <p>Intermine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
