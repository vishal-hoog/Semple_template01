import React, { useEffect, useState } from "react";

const WorkProcessOne = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  });

  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className="work-process-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">OUR SIMPLE PROCESS</h6>
            <h2 className="title">
              World <span>Best Step</span> Our It Process
            </h2>
          </div>
          <div className="row">
            {data.slice(0, 4).map((props) => {
              return (
                <div className="col-xl-3 col-md-6" key={props.index}>
                  <div className="single-work-process-inner">
                    <div className="thumb mb-3">
                      <img src="assets/img/icon/9.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p className="process-count">{props.processCount}</p>{" "}
                      {/* You may want to display some actual data here */}
                      <h5 className="mb-3">{props.name}</h5>
                      <p>{props.email}</p>
                      <p className="content">
                        Research ipsum dolor sit consec tetur sed diam in the
                        aliquam tempor
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
