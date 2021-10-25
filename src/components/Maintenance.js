import React, { useState } from "react";
import Select from "react-select";

function SetMaintenance() {
  const data = [
    {
      value: 0,
      label: "None"
    },
    {
      value: 1,
      label: "Tractor"
    },
    {
      value: 2,
      label: "Dripline"
    },
    {
      value: 3,
      label: "Water-pump"
    },
    {
      value: 4,
      label: "Sprayer"
    },
    {
      value: 5,
      label: "Sand-Filter"
    },
    {
      value: 6,
      label: "Structure"
    }
  ];

  const [val, setVal] = useState("default");

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setVal(e.label);
    console.log(e.label);
  };

  return (
    <Select
      placeholder="Select Option"
      value={val}
      options={data} // set list of the data
      onChange={handleChange} // assign onChange function
    />
  );
}

export default SetMaintenance;
