import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function TopNavBar() {
  // Use the context to get the topNavItem array
  const { topNavItem, socialLinks } = useContext(UserContext);


  return (
    <div>
      <div className="top-navbar">
        {/* Left section (Email and Phone) */}
        {topNavItem.map((item) => (
          <div className="left" key={item.id}>
            <a href={`mailto:${item.email}`}>
              <FaEnvelope /> {item.email}
            </a>
            <a href={`tel:${item.phone}`}>
              <FaPhoneAlt /> {item.phone}
            </a>
          </div>
        ))}

        {/* Right section (Social media icons) */}
        <div className="right">
          <ul className="social-media">
            {socialLinks.map((social) => {
              const IconComponent =
                social.icon === "FaFacebookF"
                  ? FaFacebookF
                  : social.icon === "FaTwitter"
                  ? FaTwitter
                  : social.icon === "FaInstagram"
                  ? FaInstagram
                  : social.icon === "FaYoutube"
                  ? FaYoutube
                  : null;

              return (
                <li  key={social.id}>
                  <Link to={social.url}>
                    <IconComponent />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
