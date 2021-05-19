import React from "react";

function Profile() {
  return (
    // <div style={{backgroundImage: "url('./Assets/Images/Beach.jpg')", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover">
    <section
      class="container-fluid"
      id="background"
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
    >
      <button id="myBtnTop" title="Go to top">
        Top
      </button>

      <article class="container" style={{ padding: "20px", opacity: ".9" }}>
        <div class="row">
          <div class="col-md-12">
            <h5>
              <p style={{ color: "black" }}>
                Portfolio of work performed. The top 5 projects are shown below.{" "}
              </p>
            </h5>
          </div>

          <button type="button" class="collapsible">
            Click here for a complete list of projects
          </button>

          <div class="content">
            <div class="col-md-12 ">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Project Name</th>
                    <th scope="col">Goal of the project</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="https://pacific-meadow-78512.herokuapp.com/">
                        Project2 - Healthy Habits
                      </a>
                    </td>
                    <td>
                      Second group project, creating a back-end database, API's
                      and other tools to create a site for tracking habits.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://github.com/reybrac/ecommerce-back-end">
                        eCommernce Back-end
                      </a>
                    </td>
                    <td>
                      A back end for an e-commerce site, utilizing NPM modules
                      Express, Sequelize, and MySQL database
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://github.com/reybrac/Employee_tracker/">
                        Employee Tracker
                      </a>
                    </td>
                    <td>
                      A solution for managing a company's employees using node,
                      inquirer, and MySQL. The command-line application to
                      maintain information{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://reybrac-note-taker.herokuapp.com/">
                        Note Taker
                      </a>
                    </td>
                    <td>
                      An application that can be used to write and save notes.
                      Uses an Express.js back end that will save and retrieve
                      note data. Deployed to Heroku.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://github.com/reybrac/Team_profile_generator">
                        Team Profile Generator
                      </a>
                    </td>
                    <td>
                      A Node.js command-line application that takes in
                      information about employees, then generates an HTML
                      webpage.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://github.com/reybrac/Readme_generator">
                        README Generator
                      </a>
                    </td>
                    <td>
                      Create a README file generator. Introduction to NodeJS and
                      utilizing NPM package inquirer.{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://reybrac.github.io/A-Taste-From-Home">
                        Project1 - A Taste From Home
                      </a>
                    </td>
                    <td>
                      First group project, utilizing API's and other tools (i.e.
                      Bulma CSS, Javascript, and JQUERY) learned.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://reybrac.github.io/Weather-dashboard/">
                        Weather Dashboard
                      </a>
                    </td>
                    <td>
                      Assignment to create a weather dashboard. irst exposure to
                      working with an API and Javascript to pull the information
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://reybrac.github.io/Work-day-scheduler/">
                        Work Day Scheduler
                      </a>
                    </td>
                    <td>
                      Assignment to create a work day scheduler. Greater
                      exposure to Javascript/Jquery and the various functions
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://reybrac.github.io/Code_Quiz/">
                        Code Quiz
                      </a>
                    </td>
                    <td>
                      Assignment to create a code quiz. Greater exposure to
                      Javascript and the various functions{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://reybrac.github.io/Password_Generator/">
                        Password Generator
                      </a>
                    </td>
                    <td>
                      Assignment to take create a random password generator.
                      Intro to Javascript and the various functions.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://reybrac.github.io/Website_Optimization/">
                        Website Optimization
                      </a>
                    </td>
                    <td>
                      Assignment to take an existing site and add semantic code
                      as well as clean up CSS
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://github.com/reybrac/Fan_page">Fan Page</a>
                    </td>
                    <td>
                      Assignment to create a fan page for my favority band.
                      Intro to adding images, tables, and videos.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://github.com/reybrac/prework-about-me/blob/master/index.html">
                        Fork a repository
                      </a>
                    </td>
                    <td>
                      First assignment to fork a page and build upon existing
                      code. Introduction to Github navigation.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </article>

      <section id="Project_2">
        <article class="container-fluid">
          <div
            className="row"
            style={{
              color: "black",
              padding: "20px",
              backgroundImage:
                "linear-gradient(to top right, green, lightgreen, lightgreen, green)",
            }}
          >
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <a href="https://pacific-meadow-78512.herokuapp.com/">
                <img
                  src="https://github.com/dorrianweber/project2/raw/main/public/images/Healthyhabits-homepage.jpg?raw=true"
                  alt="Project_2"
                  class="img-thumbnail"
                />
              </a>
            </div>
            <div class="row">
              <div class="col-md-2"></div>

              <div class="col-md" style={{ padding: "10px" }}>
                <h2>Healthy Habits site. </h2>
                <p>
                  A website that allows users to make an account, so that they
                  can keep track of their habits and take the steps to improve.
                  Utized various technologies (Express.js, Handlebars.js,
                  Chart.js, and more) to copmlete the project.
                  <ul>
                    <li>
                      Link to the live site{" "}
                      <a href="https://pacific-meadow-78512.herokuapp.com/">
                        here
                      </a>
                    </li>
                    <li>
                      Link to the Github repository{" "}
                      <a href="https://github.com/reybrac/HealthyHabits">
                        here
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="note-taker">
        <article class="container-fluid">
          <div
            class="row"
            style={{
              color: "white",
              padding: "20px",
              backgroundImage:
                "linear-gradient(to bottom right, black, silver)",
            }}
          >
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <a href="https://reybrac-note-taker.herokuapp.com/">
                <img
                  src="https://github.com/reybrac/note_taker/blob/main/public/assets/Note-taker-image2.JPG?raw=true"
                  alt="note-taker"
                  class="img-thumbnail"
                  style={{ height: "100%", width: "100%" }}
                />
              </a>
            </div>
            <div class="row">
              <div class="col-md-2"></div>

              <div class="col-md-8" style={{ padding: "10px" }}>
                <h2>Note Taker</h2>
                <p>
                  An application that can be used to write and save notes. Uses
                  an Express.js back end that will save and retrieve note data.
                  Deployed to Heroku.
                  <ul>
                    <li>
                      Link to the live site{" "}
                      <a href="https://reybrac-note-taker.herokuapp.com/">
                        here
                      </a>
                    </li>
                    <li>
                      Link to the Github repository{" "}
                      <a href="https://github.com/reybrac/note_taker">here</a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="Project_1">
        <article class="container-fluid">
          <div
            class="row"
            style={{
              color: "black",
              padding: "20px",
              backgroundImage:
                "linear-gradient(to bottom right, skyblue, white, skyblue)",
            }}
          >
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <a href="https://reybrac.github.io/A-Taste-From-Home">
                <img
                  src="https://github.com/reybrac/A-Taste-From-Home/raw/main/assets/Images/A-taste-from-home.JPG"
                  alt="Project_1"
                  class="img-thumbnail"
                  style={{ height: "100%", width: "100%" }}
                />
              </a>
            </div>
            <div class="row">
              <div class="col-md-2"></div>

              <div class="col-md-8" style={{ padding: "10px" }}>
                <h2>Restaurant and Recipe search site. </h2>
                <p>
                  A taste of home website to search for restaurants in the area
                  or recipes to make the food at home. This project exposed the
                  complexities of working in a group. Working with API's, Bulma
                  CSS, Javascript and the various functions.
                  <ul>
                    <li>
                      Link to the live site{" "}
                      <a href="https://reybrac.github.io/A-Taste-From-Home">
                        here
                      </a>
                    </li>
                    <li>
                      Link to the Github repository{" "}
                      <a href="https://github.com/reybrac/A-Taste-From-Home">
                        here
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="Weather_Dashboard">
        <article class="container-fluid">
          <div
            class="row  "
            style={{
              color: "white",
              padding: "20px",
              backgroundImage:
                "linear-gradient(to bottom right, purple, silver)",
            }}
          >
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <a href="https://reybrac.github.io/Weather-dashboard/">
                <img
                  src="https://github.com/reybrac/Weather-dashboard/raw/main/Assets/images/Weather-Dashboard.JPG?raw=true"
                  alt="Weather_Dashboard"
                  class="img-thumbnail"
                  style={{ height: "100%", width: "100%" }}
                />
              </a>
            </div>
            <div class="row">
              <div class="col-md-2"></div>

              <div class="col-md-8" style={{ padding: "10px" }}>
                <h2>Weather Dashboard</h2>
                <p>
                  First exposure to working with an API and Javascript to pull
                  the information.
                  <ul>
                    <li>
                      Link to the live site{" "}
                      <a href="https://reybrac.github.io/Weather-dashboard/">
                        here
                      </a>
                    </li>
                    <li>
                      Link to the Github repository{" "}
                      <a href="https://github.com/reybrac/Weather-dashboard">
                        here
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="Work-Day-Scheduler">
        <article class="container-fluid">
          <div
            class="row"
            style={{
              color: "black",
              padding: "20px",
              backgroundImage: "linear-gradient(to top left, orange, black)",
            }}
          >
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <a href="https://reybrac.github.io/Work-day-scheduler">
                <img
                  src="https://github.com/reybrac/Work-day-scheduler/raw/main/Assets/WD-scheduler.JPG?raw=true"
                  alt="Work-day-scheduler"
                  class="img-thumbnail"
                  style={{ height: "100%", width: "100%" }}
                />
              </a>
            </div>
            <div class="row">
              <div class="col-md-2"></div>

              <div class="col-md-8" style={{ padding: "10px" }}>
                <h2>Day Planner</h2>
                <p>
                  This project further immersed me in the use of Javascript &
                  Jquery and the various functions.
                  <ul>
                    <li>
                      Link to the live site{" "}
                      <a href="https://reybrac.github.io/Work-day-scheduler">
                        here
                      </a>
                    </li>
                    <li>
                      Link to the Github repository{" "}
                      <a href="https://github.com/reybrac/Work-day-scheduler">
                        here
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}

export default Profile;
