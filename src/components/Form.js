import React from "react";
import "./form.style.css";

const Form = ({ loadWeather, query1, setQuery1 }) => {
  return (
    <div className="container">
      <form onSubmit={loadWeather}>
        <div className="row">
          <div className="col-md-3 offset-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => setQuery1(e.target.value)}
              value={query1}
              name="place"
            />
          </div>

          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-info">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
