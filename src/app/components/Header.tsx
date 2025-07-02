"use client";

import React, { useState } from "react";
import EditableField from "./EditTableField";

const Header = () => {
  const [name, setName] = useState<string>("Jake");
  const [phoneNumber, setPhoneNumber] = useState<string>("123-456-7890");
  const [email, setEmail] = useState<string>("jake@su.edu");
  const [linkedin, setLinkedin] = useState<string>("linkedin.com/in/jake");
  const [github, setGithub] = useState<string>("github.com/jake");

  return (
    <div className="text-center mb-3">
      <h1 className="text-2xl font-bold mb-1">
        <EditableField onChange={setName} value={name} />
      </h1>
      <div className="flex flex-wrap justify-center gap-2 text-xs">
        <EditableField onChange={setPhoneNumber} value={phoneNumber} />
        <span>•</span>
        <EditableField onChange={setEmail} value={email} />
        <span>•</span>
        <EditableField onChange={setLinkedin} value={linkedin} />
        <span>•</span>
        <EditableField onChange={setGithub} value={github} />
      </div>
    </div>
  );
};

export default Header;
