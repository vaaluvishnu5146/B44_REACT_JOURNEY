import React from "react";

export default function ProductCard(props) {
  const { data = {}, onChange = (item) => {}, disabled = false } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <div className="d-flex flex-column justify-content-center">
              <h3>{data.label || "Name Not Available"}</h3>
              <p class="">{`₹${data.price}` || "Price not available"}</p>
            </div>
          </div>
          <div className="col-4">
            <div
              className="d-flex h-100vh flex-column justify-content-center"
              style={{ height: "100%" }}
            >
              <button
                disabled={disabled}
                className={`btn ${
                  disabled ? "btn-secondary" : "btn-primary"
                } btn-sm`}
                onClick={() => onChange(data)}
              >
                {disabled ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
