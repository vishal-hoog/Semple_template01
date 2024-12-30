import React from 'react';
// import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const GalleryOne = () => {
 
  return (
    <>
      {/* Gallery area start */}
      <div className="gallery-area gallery-area_1 bg-black-ico bg-relative pd-top-110">
        <div className="container">
          <div className="section-title style-white">
            <div className="row">
              <div className="col-md-8">
                <h6 className="sub-title text-white">GALLERY HERE</h6>
                <h2 className="title">Leading The Digital Revolution</h2>
              </div>
              <div className="col-md-4 text-md-end align-self-center">
                <Link className="btn btn-base bg-base-9 mt-lg-0" to="/about">
                  All Category <FaPlus />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="single-case-study-inner style-3">
                    <div className="thumb img-fit-container">
                      <img src="" alt="" />
                    </div>
                    <div className="details">
                      <h5>
                        <Link to="/project-details"></Link>
                      </h5>
                      <Link className="cat" to="#">
                      </Link>
                      <Link className="right-arrow" to="#">
                        <FaAnglesRight />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" >
                  <div className="single-case-study-inner style-3">
                    <div className="thumb img-fit-container">
                      <img src="" alt="" />
                    </div>
                    <div className="details">
                      <h5>
                        <Link to="/project-details"></Link>
                      </h5>
                      <Link className="cat" to="#">
                      
                      </Link>
                      <Link className="right-arrow" to="#">
                        <FaAnglesRight />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-case-study-inner style-3">
                    <div className="thumb img-fit-container">
                      <img src="" alt="" />
                    </div>
                    <div className="details">
                      <h5>
                        <Link to="/project-details"></Link>
                      </h5>
                      <Link className="cat" to="#">
                       
                      </Link>
                      <Link className="right-arrow" to="#">
                        <FaAnglesRight />
                      </Link>
                    </div>
                  </div>
                </div>
              );
           
          </div>
        </div>
      </div>
      {/* Gallery area end */}
    </>
  );
};

export default GalleryOne;
