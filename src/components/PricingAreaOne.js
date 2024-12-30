import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingAreaOne = () => {
  return (
    <>
      {/* Pricing Area One start */}
      <div className="pricing-area  pricing-area_1  pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Pricing plan</h6>
            <h2 className="title">
              Best plane to get our <span>Services</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3">
                <h2 className="mb-3">
                  $19 <sub>/mo</sub>
                </h2>
                <h5>Started</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Mobile App Development
                  </li>
                  <li>
                    <FaCheck />
                    Branding &amp; Identity
                  </li>
                  <li>
                    <FaCheck />
                    Email Marketing &amp; Automation
                  </li>
                  <li>
                    <FaCheck />
                    E-commerce Solutions
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Video &amp; Animation Production{' '}
                  </li>
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  to="#"
                >
                  Started
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3 price-active">
                <h2 className="mb-3">
                  $19 <sub>/mo</sub>
                </h2>
                <h5>Started</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Mobile App Development
                  </li>
                  <li>
                    <FaCheck />
                    Branding &amp; Identity
                  </li>
                  <li>
                    <FaCheck />
                    Email Marketing &amp; Automation
                  </li>
                  <li>
                    <FaCheck />
                    E-commerce Solutions
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Video &amp; Animation Production{' '}
                  </li>
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  to="#"
                >
                  Started
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3">
                <h2 className="mb-3">
                  $19 <sub>/mo</sub>
                </h2>
                <h5>Started</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Mobile App Development
                  </li>
                  <li>
                    <FaCheck />
                    Branding &amp; Identity
                  </li>
                  <li>
                    <FaCheck />
                    Email Marketing &amp; Automation
                  </li>
                  <li>
                    <FaCheck />
                    E-commerce Solutions
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Social Media Management
                  </li>
                  <li className="hide">
                    <FaCheck />
                    Video &amp; Animation Production{' '}
                  </li>
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  to="#"
                >
                  Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Area One start */}
    </>
  );
};

export default PricingAreaOne;
