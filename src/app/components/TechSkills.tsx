import React, { useState } from "react";
import EditableField from "./EditTableField";

const TechSkills = () => {
  const [languages, setLanguages] = useState<string>("Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R");
  const [frameworks, setFrameworks] = useState<string>("React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI");
  const [devTools, setDevTools] =useState<string>("Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse");
  const [libraries, setLibraries] =useState<string>("pandas, NumPy, Matplotlib");

  return (
    <div>
      <h2 className="text-base font-bold border-b border-black mb-1">
        TECHNICAL SKILLS
      </h2>
      <div className="space-y-0.5">
        <div>
          <span className="font-bold">Languages:</span>{" "}
          <EditableField onChange={setLanguages} value={languages} />
        </div>
        <div>
          <span className="font-bold">Frameworks:</span>{" "}
          <EditableField onChange={setFrameworks} value={frameworks} />
        </div>
        <div>
          <span className="font-bold">Developer Tools:</span>{" "}
          <EditableField onChange={setDevTools} value={devTools} />
        </div>
        <div>
          <span className="font-bold">Libraries:</span>{" "}
          <EditableField onChange={setLibraries} value={libraries} />
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
