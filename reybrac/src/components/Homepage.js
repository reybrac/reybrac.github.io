import React from "react";
//, { useState, useEffect }
import Carousel from "react-bootstrap/Carousel";

function Homepage() {
  return (
    <div className="container-fluid row">
      <div className="col-md-3" id="section2">
        <div className="card">
          <img
            className="card-img-top"
            id="profilepic"
            src="https://github.com/reybrac/reybrac.github.io/blob/main/Assets/Images/reynaldo.jpg?raw=true"
            alt="Reynaldo Bracamonte"
          />
        </div>
        <br />

        <p>Thanks for visiting. </p>

        <p>
          My name is <h3>Reynaldo Bracamonte</h3>. I am currently attending the
          coding bootcamp available through UC Davis.{" "}
        </p>
        <p>
          It has been challenging to learn new skills and there is a lot of
          research required, but so far it is an enjoyable program.
        </p>
        <br />
        <p>
          <i className="far fa-briefcase fa-fw"></i> Aspiring Web Developer
        </p>
        <p>
          <i className="far fa-home fa-fw "></i> Tracy, CA
        </p>
        <p>
          <button>
            <a alt="email" href="mailto:reybrac@yahoo.com">
              <i className="far fa-envelope"></i> Email
            </a>
          </button>{" "}
        </p>
        <p>
          <button alt="phone" onclick="myFunction()">
            <i className="fas fa-phone-square-alt"></i> Number
          </button>
          <span id="number"></span>
        </p>
        <p>
          <a
            alt="resume"
            href="Assets/Images/RBracamonte_Resume.pdf"
            download="RBracamonte resume"
          >
            <button id="resume">
              <i className="far fa-file-alt"> Resume</i>
            </button>
          </a>
        </p>
        <p>
          <button>
            <a
              href="https://www.linkedin.com/in/rey-bracamonte-0595591/"
              target="blank"
              alt="linkedin"
            >
              <i className="fab fa-linkedin"> LinkedIn</i>
            </a>
          </button>
        </p>
        <p>
          <button>
            <a
              href="https://github.com/reybrac"
              target="blank"
              alt="Reybrac github"
            >
              <i className="fab fa-github"> Github</i>
            </a>
          </button>{" "}
        </p>
      </div>

      <div className="col-md-8" id="section3">
        <div className="row" id="rower2">
          <h2>Some of the projects that I have completed.</h2>
          <p>
            See more under my{" "}
            <a href="https://reybrac.github.io/portfolio.html">Portfolio</a>{" "}
            section
          </p>

          <hr />
          <Carousel>
            <Carousel.Item>
              <a href="https://reybrac.github.io/A-Taste-From-Home">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/A-Taste-From-Home/raw/main/assets/Images/A-taste-from-home.JPG"
                  alt="A Taste from Home"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://reybrac.github.io/Weather-dashboard/">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/Weather-dashboard/raw/main/Assets/images/Weather-Dashboard.JPG?raw=true"
                  alt="Weather Dashboard"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://reybrac.github.io/Work-day-scheduler">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/Work-day-scheduler/raw/main/Assets/WD-scheduler.JPG?raw=true"
                  alt="Workday Scheduler"
                />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="row" id="rower1">
          <div className="col">
            <h2>Happy Life</h2>
            <p>Thankful for everything I have!</p>
            <ul>
              <li>My family is a great driving force for me to improve.</li>
              <li>I work hard to make their lives better!</li>
              <li>Married for 12 years!</li>
              <li>3 wonderful children!</li>
              <li>Dog and turtle!</li>
            </ul>
            <hr />
            <h2>Dislikes</h2>
            <ul>
              <li>Brussel Sprouts</li>
              <li>COVID-19</li>
              <li>Waiting in line</li>
            </ul>
            <hr />

            <h2>Likes</h2>
            <ul>
              <li>Food</li>
              <li>Kayaking</li>
              <li>Fishing</li>
              <li>Reading</li>
              <li>Spending time with family</li>
              <li>Spartan Obstacle races</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
