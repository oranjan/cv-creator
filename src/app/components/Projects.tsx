import React, { useState } from "react";
import EditableField from "./EditTableField";

const Projects = () => {
  const [project1Name, setProject1Name] = useState<string>("Gitlytics");
  const [project1Tech, setProject1Tech] = useState<string>(
    "Python, Flask, React, PostgreSQL, Docker"
  );
  const [project1Dates, setProject1Dates] = useState<string>(
    "June 2020 – Present"
  );
  const [project1Bullet1, setProject1Bullet1] = useState<string>(
    "Developed a full-stack web application using with Flask serving a REST API with React as the frontend"
  );
  const [project1Bullet2, setProject1Bullet2] = useState<string>(
    "Implemented GitHub OAuth to get data from user's repositories"
  );
  const [project1Bullet3, setProject1Bullet3] = useState<string>(
    "Visualized GitHub data to show collaboration"
  );
  const [project1Bullet4, setProject1Bullet4] = useState<string>(
    "Used Celery and Redis for asynchronous tasks"
  );

  // Projects - Project 2
  const [project2Name, setProject2Name] = useState<string>("Simple Paintball");
  const [project2Tech, setProject2Tech] = useState<string>(
    "Spigot API, Java, Maven, TravisCI, Git"
  );
  const [project2Dates, setProject2Dates] = useState<string>(
    "May 2018 – May 2020"
  );
  const [project2Bullet1, setProject2Bullet1] = useState<string>(
    "Developed a Minecraft server plugin to entertain kids during free time for a previous job"
  );
  const [project2Bullet2, setProject2Bullet2] = useState<string>(
    "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review"
  );
  const [project2Bullet3, setProject2Bullet3] = useState<string>(
    "Implemented continuous delivery using TravisCI to build the plugin upon new a release"
  );
  const [project2Bullet4, setProject2Bullet4] = useState<string>(
    "Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin"
  );

  return (
    <div className="mb-3">
      <h2 className="text-base font-bold border-b border-black mb-1">
        PROJECTS
      </h2>

      {/* Project 1 */}
      <div className="mb-2">
        <div className="flex justify-between items-start mb-0.5">
          <span className="font-bold">
            <EditableField onChange={setProject1Name} value={project1Name} />
            <span className="italic font-normal ml-1">
              <EditableField onChange={setProject1Tech} value={project1Tech} />
            </span>
          </span>
          <span className="font-bold">
            <EditableField onChange={setProject1Dates} value={project1Dates} />
          </span>
        </div>
        <ul className="list-disc ml-5 space-y-0.5">
          <li>
            <EditableField
              onChange={setProject1Bullet1}
              value={project1Bullet1}
            />
          </li>
          <li>
            <EditableField
              onChange={setProject1Bullet2}
              value={project1Bullet2}
            />
          </li>
          <li>
            <EditableField
              onChange={setProject1Bullet3}
              value={project1Bullet3}
            />
          </li>
          <li>
            <EditableField
              onChange={setProject1Bullet4}
              value={project1Bullet4}
            />
          </li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="mb-2">
        <div className="flex justify-between items-start mb-0.5">
          <span className="font-bold">
            <EditableField onChange={setProject2Name} value={project2Name} />
            <span className="italic font-normal ml-1">
              <EditableField onChange={setProject2Tech} value={project2Tech} />
            </span>
          </span>
          <span className="font-bold">
            <EditableField onChange={setProject2Dates} value={project2Dates} />
          </span>
        </div>
        <ul className="list-disc ml-5 space-y-0.5">
          <li>
            <EditableField
              onChange={setProject2Bullet1}
              value={project2Bullet1}
            />
          </li>
          <li>
            <EditableField
              onChange={setProject2Bullet2}
              value={project2Bullet2}
            />
          </li>
          <li>
            <EditableField
              onChange={setProject2Bullet3}
              value={project2Bullet3}
            />
          </li>
          <li>
            <EditableField
              onChange={setProject2Bullet4}
              value={project2Bullet4}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
