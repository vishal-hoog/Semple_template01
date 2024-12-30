import React from 'react';
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterNine = () => {
  return (
    <>
      {/* footer area start */}
      <footer className="footer-area footer-area-2 footer-area-9  bg-gray mt-0 pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/logo.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                  <div className="subscribe mt-4">
                    <input type="text" placeholder="E-mail" />
                    <button>
                      <FaChevronRight className="mb-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Ui Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Web design
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Digital marketing{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Video Editing
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Pc Repairs
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Pay links</h4>
                <ul>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Finance Sector{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaChevronRight className="mb-1" /> Finance Sector
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <div className="widget widget_contact">
                  <ul className="details">
                    <li>
                      <FaMapMarkerAlt />
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </li>
                    <li className="mt-3">
                      <FaPhoneAlt className="mb-1" /> (+888) 123 456 765
                    </li>
                    <li className="mt-2">
                      <FaEnvelope className="mb-1" /> infoname@mail.com
                    </li>
                  </ul>
                  <ul className="social-media mt-4">
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
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© agiletech 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link to="#">Trams &amp; Condition</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterNine;
