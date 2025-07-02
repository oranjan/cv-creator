import React, { useState } from "react";

interface EditableFieldProps {
  onChange: (value: string) => void;
  value: string;
}

const EditableField = ({ onChange, value }: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setIsEditing(false);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="">
      {isEditing ? (
        <input
          className="outline w-full  max-w-full  outline-gray-300 rounded-md px-1 text-center"
          value={value}
          autoFocus
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onBlur={() => setIsEditing(false)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="" onClick={() => setIsEditing(true)}>
          {value}
        </span>
      )}
    </div>
  );
};

export default EditableField;
