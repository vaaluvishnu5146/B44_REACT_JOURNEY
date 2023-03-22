import React, { useState } from "react";
import TextField from "../components/TextField";

export default function Signin() {
  const [data, setData] = useState({});

  function handleChange(e) {
    const { id, value } = e.target;
    let dataCopy = {
      ...data,
    };
    dataCopy[id] = value;
    setData(dataCopy);
  }

  return (
    <div className="container">
      <div className="container-fluid">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
          }}
        >
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <TextField
                label="Email"
                placeholder="name@example.com"
                id="email"
                type="password"
                onChange={handleChange}
              />
              <TextField
                label="Password"
                placeholder="**************"
                id="password"
                type="password"
                onChange={handleChange}
              />
              <div
                className="d-flex h-100vh flex-column justify-content-center"
                style={{ height: "100%" }}
              >
                <button
                  className={`btn btn-primary btn-sm`}
                  onClick={() => console.log(data)}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
