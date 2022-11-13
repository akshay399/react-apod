import React, { useState } from "react";
import DatePicker from "react-date-picker";
function Date1({ handleChangeP, pullImage }) {
  const [value, onChange] = useState(new Date());
  const handleChange = () => {
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var date = value.getDate();
    var dateStr = `${year}-${month}-${date}`;
    handleChangeP(dateStr);
    pullImage(dateStr);
  };

  return (
    <div className="card" style={{ background: "white" }}>
      <h2 className="font">Select Date:</h2>
      <DatePicker
        style={{ font: "100%" }}
        className="font"
        onChange={onChange}
        format="dd-MM-y"
        value={value}
        maxDate={new Date()}
      ></DatePicker>
      <br></br>
      <br></br>
      <h2>
        <button
          className="btn center"
          style={{ top: "50%", backgroundColor: "black", color: "wheat" }}
          onClick={handleChange}
        >
          <b>Get Image</b>
        </button>
      </h2>
    </div>
  );
}

export default Date1;
