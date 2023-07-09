import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import "./index.css";

export const CsInput = ({
  type = "text",
  onChange,
  value = "",
  placeholder = "",
  className = "",
}) => {
  const [inputType, setInputType] = useState("password");
  if (type === "text") {
    return (
      <div className="cs-input-container">
        <input
          className={`html-input ${className}`}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    );
  } else if (type === "password") {
    return (
      <div className="cs-input-container">
        {inputType === "password" ? (
          <AiOutlineEye
            width={25}
            height={25}
            style={{ margin: "10px", color: "white", cursor:'pointer' }}
            onClick={() => {
              setInputType("text");
            }}
          />
        ) : (
          <AiOutlineEyeInvisible
            width={25}
            height={25}
            style={{ margin: "10px", color: "white", cursor:'pointer' }}
            onClick={() => {
              setInputType("password");
            }}
          />
        )}

        <input
          className={`html-input ${className}`}
          type={inputType === "password" ? "password" : "text"}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    );
  } else {
    return (
      <div className="cs-input-container">
        <input
          className={`html-input ${className}`}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    );
  }
};
