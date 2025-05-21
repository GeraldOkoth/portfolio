import React from 'react'

function Projects() {
  return (
      <div className="container" id="projects">
        <h2>My Projects</h2>
        <div className="project-list card-deck">
          <div className="card" style={{ width: 400 }}>
            <img
              src="/images/Screenshot 2023-11-22 1X41107.png"
              className="card-img-top"
              alt="Project 1"
            />
            <div className="card-body">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
              <a
                href="https://github.com/GeraldOkoth"
                className="btn btn-primary stretched-link"
              >
                See project
              </a>
            </div>
          </div>
          <div className="card" style={{ width: 400 }}>
            <img
              src="/images/Screenshot 2023-11-22 141831.png"
              alt="Project 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">Project 1</h3>
              <p className="card-text">Description of Project 1</p>
              <a
                href="https://github.com/GeraldOkoth"
                className="btn btn-primary stretched-link"
              >
                See project
              </a>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
  );
}

export default Projects