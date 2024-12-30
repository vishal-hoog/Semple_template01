import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerOne = () => {
  const [headerData, setHeaderData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    axios.get('http://localhost:5000/headerData')
      .then((response) => {
        setHeaderData(response.data);  // Set the fetched data to state
      })
      .catch((error) => {
        console.error('There was an error fetching the nav items!', error);
      });
  }, []);  // Empty dependency array to run once after mount

  return (
    <>
      {/* ================== BannerOne Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-1 pd-bottom-100 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner/0.png")' }}
      >
        <img
          className='animate-img-1 top_image_bounce'
          src='assets/img/banner/2.png'
          alt='img'
        />
        <img
          className='animate-img-2 left_image_bounce'
          src='assets/img/banner/5.svg'
          alt='img'
        />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              {headerData.length > 0 && headerData.map((item, index) => ( // Only map if data exists
                <div className='banner-inner pe-xl-5' key={index}>
                  <h6
                    className='subtitle'
                    data-aos='fade-right'
                    data-aos-delay='100'
                    data-aos-duration='1500'
                  >
                    DESIGNING FOR THE FUTURE
                  </h6>
                  <h2
                    className='title'
                    data-aos='fade-right'
                    data-aos-delay='200'
                    data-aos-duration='1500'
                  >
                    {item.title}
                  </h2>
                  <p
                    className='content pe-xl-5'
                    data-aos='fade-right'
                    data-aos-delay='250'
                    data-aos-duration='1500'
                  >
                    {item.description}
                  </p>
                  <Link
                    className='btn btn-border-base'
                    data-aos='fade-right'
                    data-aos-delay='300'
                    data-aos-duration='1500'
                    to='/about'
                  >
                    Discover More <FaPlus />
                  </Link>
                </div>
              ))}
            </div>
            <div className='col-xl-4 col-lg-5 col-md-8 offset-xl-2 offset-lg-1'>
              <div
                className='banner-thumb mt-5 mt-lg-0 ms-4 ms-lg-0'
                data-aos='fade-left'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='banner-animate-img banner-animate-img-1 top_image_bounce'
                  src='assets/img/banner/2.png'
                  alt='img'
                />
                <img
                  className='banner-animate-img banner-animate-img-2'
                  src='assets/img/banner/3.svg'
                  alt='img'
                />
                <img
                  className='banner-animate-img banner-animate-img-3 left_image_bounce'
                  src='assets/img/banner/4.svg'
                  alt='img'
                />
                <img
                  className='main-img'
                  src='assets/img/banner/1.png'
                  alt='img'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== BannerOne End ==================*/}
    </>
  );
};

export default BannerOne;
