import React from "react";
//, { useState, useEffect }This is unfortunate
import Carousel from "react-bootstrap/Carousel";

function Homepage(props) {
  return (
    <div className="container-fluid row">
      <div className="col-md-4" id="section2">
        <div className="card">
          <img
            className="card-img-top"
            id="profilepic"
            src="https://github.com/reybrac/reybrac.github.io/blob/main/reynaldo.jpg?raw=true"
            alt="Reynaldo Bracamonte"
          />
        </div>
        <br />

        <p>
          My name is <h4>Reynaldo Bracamonte.</h4> I am a full stack web
          developer. I attended the coding bootcamp available through UC Davis.{" "}
        </p>
        <p>
          It has been challenging to learn new skills and there is a lot of
          research required, but it was an enjoyable program. Web design is now
          my hobby and I enjoy coming up with solutions to everyday challenges.
        </p>
        <br />
        <p>
          <i className="far fa-briefcase fa-fw"></i> Customer Service
          Professional with project management, soft skills, management, and Web
          Development skills.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg"
          >
            <img
              alt="html"
              src="https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg"
          >
            <img
              alt="css"
              src="https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg"
          >
            <img
              alt="javascript"
              src="https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/jquery/jquery-plain-wordmark.svg"
          >
            <img
              alt="jquery"
              src="https://github.com/devicons/devicon/raw/master/icons/jquery/jquery-plain-wordmark.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg"
          >
            <img
              alt="nodejs"
              src="https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg"
          >
            <img
              alt="npm"
              src="https://github.com/devicons/devicon/raw/master/icons/npm/npm-original-wordmark.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-plain.svg"
          >
            <img
              alt="bootstrap"
              src="https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-plain.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg"
          >
            <img
              alt="Github"
              src="https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg"
          >
            <img
              alt="express"
              src="https://github.com/devicons/devicon/raw/master/icons/express/express-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg"
          >
            <img
              alt="mysql"
              src="https://github.com/devicons/devicon/raw/master/icons/mysql/mysql-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/sequelize/sequelize-original.svg"
          >
            <img
              alt="sequelize"
              src="https://github.com/devicons/devicon/raw/master/icons/sequelize/sequelize-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg"
          >
            <img
              alt="mongodb"
              src="https://github.com/devicons/devicon/raw/master/icons/mongodb/mongodb-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/heroku/heroku-original.svg"
          >
            <img
              alt="heroku"
              src="https://github.com/devicons/devicon/raw/master/icons/heroku/heroku-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg"
          >
            <img
              alt="react"
              src="https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg"
              style={{ align: "left", maxWidth: "100%", width: "40px" }}
            />
          </a>
        </p>

        <p>
          <i className="far fa-home fa-fw "></i> Tracy, CA
        </p>

        <hr />

        <img
          className="d-block w-100"
          src="https://github.com/reybrac/reybrac.github.io/blob/main/Zuma.jpg?raw=true"
          alt="Zuma-dog"
        />
      </div>

      <div className="col-md-8" id="section3">
        <div className="row" id="rower2">
          <h2>Some of the projects that I have completed.</h2>
          <p>See more under my Portfolio section</p>

          <hr />
          <Carousel>
            <Carousel.Item>
              <a href="https://reybrac.github.io/A-Taste-From-Home">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/A-Taste-From-Home/raw/main/assets/Images/A-taste-from-home.JPG"
                  alt="A Taste from Home"
                  target="_blank"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://reybrac.github.io/Weather-dashboard/">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/Weather-dashboard/raw/main/Assets/images/Weather-Dashboard.JPG?raw=true"
                  alt="Weather Dashboard"
                  target="_blank"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://reybrac.github.io/Work-day-scheduler">
                <img
                  className="d-block w-100"
                  src="https://github.com/reybrac/Work-day-scheduler/raw/main/Assets/WD-scheduler.JPG?raw=true"
                  alt="Workday Scheduler"
                  target="_blank"
                />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="row" id="rower1">
          <div className="col">
            <h2>Happy Life</h2>
            <p>Thankful for everything I have!</p>
            <ul className="nobullets">
              <li>My family is a great driving force for me to improve.</li>
              <li>I work hard to make their lives better!</li>
              <li>Married for 12 years!</li>
              <li>3 wonderful children!</li>
              <li>Dog and turtle!</li>
            </ul>
            <hr />
            <h2>Dislikes</h2>
            <ul className="nobullets">
              <li>Brussel Sprouts</li>
              <li>COVID-19</li>
              <li>Waiting in line</li>
            </ul>
            <hr />

            <h2>Likes</h2>
            <ul className="nobullets">
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
