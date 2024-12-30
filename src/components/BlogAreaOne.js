import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaRegComments, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogAreaOne = () => {
  const [blogImg, setBlogImg] = useState([]);

  useEffect(() => {
    // Simulating multiple API requests to get random images
    const fetchImages = async () => {
      const images = [];
      try {
        for (let i = 0; i < 4; i++) {
          const response = await axios.get(`https://picsum.photos/200/200?random=${i}`);
          // Add the image URL to the array
          images.push({
            id: i,
            imageUrl: response.request.responseURL, // Get the URL of the image
            title: `Blog Post ${i + 1}`, // Title for each blog post (you can adjust this as needed)
          });
        }
        setBlogImg(images); // Set the images state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      {/*===================== Blog Area One start =====================*/}
      <div className="blog-area pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">New Blog</h6>
            <h2 className="title">
              Best new to get our <span>Blog</span>
            </h2>
          </div>
          <div className="row">
            {/* Loop over the blogImg array and display images */}
            {blogImg.slice(0, 3).map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="single-blog-list">
                  <div className="thumb">
                    <img src={item.imageUrl} alt="Blog" />
                  </div>
                  <div className="details">
                    <p className="date mb-3">
                      <FaCalendarAlt />
                      October 19, 2023
                    </p>
                    <h5>
                      <Link to="/blog-details">{item.title}</Link>
                    </h5>
                    <div className="meta">
                      <div className="row">
                        <div className="col-6">
                          <p>
                            <FaRegUser />
                            Sam Curren
                          </p>
                        </div>
                        <div className="col-6 text-end">
                          <p>
                            <FaRegComments />
                            10 Comments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ===================== BlogAreaOne End =====================*/}
    </>
  );
};

export default BlogAreaOne;
