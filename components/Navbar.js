import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
// import Image from 'next/image';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  // const toggleLinks = () => {
  //   setShowLinks(!showLinks);
  // };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height + 40;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }

    // const checkIfClickedOutside = e => {
    //   // If the menu is open and the clicked target is not within the menu,
    //   // then close the menu
    //   if (showLinks && linksRef.current && !linksRef.current.contains(e.target)) {
    //     setShowLinks(false)
    //   }
    // }
  }, [showLinks]);

  const handleClick = e => {
    console.log(e);
    setShowLinks(!showLinks);
  }

  return (
    <nav>
      <div className="nav--center">
        <div className="nav--header">
            <img
              src="/images/signature.png" 
              className="logo"
              alt="logo" 
              width={150}
              height={50}
            />
          <button className="nav--toggle" onClick={e => handleClick(e)}>
            <FaBars />
          </button>
        </div>
        <div className="nav-links--container" ref={linksContainerRef}>
          <ul className="nav-links" ref={linksRef}>
            <li>
              <a className="link-hover-lines" href="">HOME</a>
            </li>
            <li>
              <a className="link-hover-lines" href="">WORK</a>
            </li>
            <li>
              <a className="link-hover-lines" href="">ABOUT</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
            <a href=""><i className="fa-brands fa-slack"></i></a>
            <a href=""><i className="fa-solid fa-envelope"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
