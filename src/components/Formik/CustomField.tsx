// CustomField.jsx

import React from 'react';

const CustomField = ({ type, name, labelText, className, placeholder, options, ...props }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">
          <b>{labelText}</b>
        </span>
      </label>

      {type === 'select' ? (
        <select name={name} {...props} className={`bg-white select select-bordered w-full ${className}`}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`bg-white w-full input input-bordered ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

export default CustomField;
