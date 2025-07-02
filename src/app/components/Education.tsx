import React, { useState } from "react";
import EditableField from "./EditTableField";

const Education = () => {
  const [university, setUniversity] = useState<string>("Stanford University");
  const [location, setLocation] = useState<string>("Stanford, CA");
  const [educationDates, setEducationDates] = useState<string>(
    "Sept. 2020 – June 2023"
  );
  const [degree, setDegree] = useState<string>(
    "Bachelor of Science in Computer Science; Minor in Mathematics"
  );
  const [gpa, setGpa] = useState<string>("GPA: 3.50");
  const [coursework, setCoursework] = useState<string>(
    "Data Structures, Computer Architecture, Algorithms, Artificial Intelligence, Machine Learning, Cybersecurity"
  );

  return (
    <div className="mb-3">
      <h2 className="text-base font-bold border-b border-black mb-1">
        EDUCATION
      </h2>
      <div className="flex justify-between gap-10 items-start mb-0.5">
        <div>
          <span className="font-bold">
            <EditableField onChange={setUniversity} value={university} />
          </span>
          <span className="ml-2">
            <EditableField onChange={setLocation} value={location} />
          </span>
        </div>
        <span className="font-bold">
          <EditableField onChange={setEducationDates} value={educationDates} />
        </span>
      </div>
      <div className="flex justify-between gap-10 mb-0.5">
        <span className="italic">
          <EditableField onChange={setDegree} value={degree} />
        </span>
        <span className="font-bold">
          <EditableField onChange={setGpa} value={gpa} />
        </span>
      </div>
      <div>
        <span className="font-bold">Relevant Coursework:</span>{" "}
        <EditableField onChange={setCoursework} value={coursework} />
      </div>
    </div>
  );
};

export default Education;
