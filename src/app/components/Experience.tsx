import React, { useState } from "react";
import EditableField from "./EditTableField";

const Experience = () => {
  const [job1Title, setJob1Title] = useState<string>("Software Engineer");
  const [job1Company, setJob1Company] = useState<string>(
    "Google, Palo Alto, CA"
  );
  const [job1Dates, setJob1Dates] = useState<string>("Oct. 2022 – Present");
  const [job1Bullet1, setJob1Bullet1] = useState<string>(
    "Collaborated with product managers to decide on the most applicable machine learning approach and deployed models to production"
  );
  const [job1Bullet2, setJob1Bullet2] = useState<string>(
    "Implemented a web app using React, Node.js, Firebase and REST APIs to track analyzed data on 5000+ students"
  );
  const [job1Bullet3, setJob1Bullet3] = useState<string>(
    "Utilized Cloud AI API's to save the university $1000+ annually on software licenses"
  );

  // Experience - Job 2
  const [job2Title, setJob2Title] = useState<string>("Research Assistant");
  const [job2Company, setJob2Company] = useState(
    "Stanford University, Stanford, CA"
  );
  const [job2Dates, setJob2Dates] = useState<string>("June 2020 – Oct. 2022");
  const [job2Bullet1, setJob2Bullet1] = useState<string>(
    "Conducted quantitative analysis of over 18 sleep studies and over 300 patients to determine the likelihood of a sleep disorder"
  );
  const [job2Bullet2, setJob2Bullet2] = useState<string>(
    "Explored ways to visualize GitHub collaboration in a classroom setting"
  );

  // Experience - Job 3
  const [job3Title, setJob3Title] = useState<string>(
    "Software Developer Intern"
  );
  const [job3Company, setJob3Company] = useState<string>(
    "Startup Venture, Redwood City, CA"
  );
  const [job3Dates, setJob3Dates] = useState<string>("June 2019 – Aug. 2019");
  const [job3Bullet1, setJob3Bullet1] = useState<string>(
    "Collaborated with senior engineer to architect and develop a mobile application to analyze and determine ideal business strategies based on self-reported data"
  );
  const [job3Bullet2, setJob3Bullet2] = useState<string>(
    "Integrated the application with reward systems API for better customer retention"
  );

  return (
    <div className="mb-3">
      <h2 className="text-base font-bold border-b border-black mb-1">
        EXPERIENCE
      </h2>

      {/* First Job */}
      <div className="mb-2">
        <div className="flex justify-between items-start mb-0.5">
          <div>
            <span className="font-bold">
              <EditableField onChange={setJob1Title} value={job1Title} />
            </span>
            <span className="ml-2">
              <EditableField onChange={setJob1Company} value={job1Company} />
            </span>
          </div>
          <span className="font-bold">
            <EditableField onChange={setJob1Dates} value={job1Dates} />
          </span>
        </div>
        <ul className="list-disc ml-5 space-y-0.5">
          <li>
            <EditableField onChange={setJob1Bullet1} value={job1Bullet1} />
          </li>
          <li>
            <EditableField onChange={setJob1Bullet2} value={job1Bullet2} />
          </li>
          <li>
            <EditableField onChange={setJob1Bullet3} value={job1Bullet3} />
          </li>
        </ul>
      </div>

      {/* Second Job */}
      <div className="mb-2">
        <div className="flex justify-between items-start mb-0.5">
          <div>
            <span className="font-bold">
              <EditableField onChange={setJob2Title} value={job2Title} />
            </span>
            <span className="ml-2">
              <EditableField onChange={setJob2Company} value={job2Company} />
            </span>
          </div>
          <span className="font-bold">
            <EditableField onChange={setJob2Dates} value={job2Dates} />
          </span>
        </div>
        <ul className="list-disc ml-5 space-y-0.5">
          <li>
            <EditableField onChange={setJob2Bullet1} value={job2Bullet1} />
          </li>
          <li>
            <EditableField onChange={setJob2Bullet2} value={job2Bullet2} />
          </li>
        </ul>
      </div>

      {/* Third Job */}
      <div className="mb-2">
        <div className="flex justify-between items-start mb-0.5">
          <div>
            <span className="font-bold">
              <EditableField onChange={setJob3Title} value={job3Title} />
            </span>
            <span className="ml-2">
              <EditableField onChange={setJob3Company} value={job3Company} />
            </span>
          </div>
          <span className="font-bold">
            <EditableField onChange={setJob3Dates} value={job3Dates} />
          </span>
        </div>
        <ul className="list-disc ml-5 space-y-0.5">
          <li>
            <EditableField onChange={setJob3Bullet1} value={job3Bullet1} />
          </li>
          <li>
            <EditableField onChange={setJob3Bullet2} value={job3Bullet2} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
