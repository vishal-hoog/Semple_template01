import React, { useState,useEffect } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube ,FaEnvelope,FaPhoneAlt} from "react-icons/fa";
import { Link } from "react-router-dom";

function TopNavBar() {

  const[topNavItem, setTopNavItem] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:5000/topNavItem')
      .then((response) => {
        setTopNavItem(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the nav items!', error);
      });
  }, []);
  
  return (
    <div>
      <div class="top-navbar">
        {/* <Left section (Email and Phone) */}
        {
          topNavItem.map((item) => (
            <div class="left" key={item.index}>
          <a href="mailto:example@example.com"><FaEnvelope /> {item.email}</a>
          <a href="tel:+1234567890"><FaPhoneAlt /> {item.phone}</a>
        </div>
          ))
        }
        {/* Right section (Social media icons) */}
        <div class="right">
          <ul className="social-media">
            <li>
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaYoutube />
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
