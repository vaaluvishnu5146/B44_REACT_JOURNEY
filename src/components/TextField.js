import React from "react";

//  STATELESS COMPONENT
export default function TextField({
  label = "",
  id = "",
  onChange = (e) => {},
  type = "text",
  placeholder = "",
}) {
  return (
    <div class="mb-3">
      <label for="password" class="form-label">
        {label}
      </label>
      <input
        type={type}
        class="form-control"
        id={id}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
