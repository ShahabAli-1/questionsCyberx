import React from "react";
import { useState } from "react";
import csv_1 from "./assets/1.csv";
import csv_2 from "./assets/2.csv";
import csv_3 from "./assets/3.csv";
import csv_4 from "./assets/4.csv";
import csv_5 from "./assets/5.csv";
import csv_6 from "./assets/6.csv";
import csv_7 from "./assets/7.csv";
import csv_8 from "./assets/8.csv";
import csv_9 from "./assets/9.csv";
import csv_10 from "./assets/10.csv";
import csv_11 from "./assets/11.csv";
import csv_12 from "./assets/12.csv";
import csv_13 from "./assets/13.csv";
import csv_14 from "./assets/14.csv";
import csv_15 from "./assets/15.csv";
import csv_16 from "./assets/16.csv";
import csv_17 from "./assets/17.csv";
import csv_0 from "./assets/0.csv";
import Questions from "./component/questions";
const App = () => {
  // const combinedData = [
  //   ...csv_0,
  //   ...csv_1,
  //   ...csv_2,
  //   ...csv_3,
  //   ...csv_4,
  //   ...csv_5,
  //   ...csv_6,
  //   ...csv_7,
  //   ...csv_8,
  //   ...csv_9,
  //   ...csv_10,
  //   ...csv_11,
  //   ...csv_12,
  //   ...csv_13,
  //   ...csv_14,
  //   ...csv_15,
  //   ...csv_16,
  //   ...csv_17,
  // ];
  // console.log(combinedData);
  // Array of options for the dropdown menu
  const csvOptions = [
    { value: "csv_0", label: "Module 0" },
    { value: "csv_1", label: "Module 1" },
    { value: "csv_2", label: "Module 2" },
    { value: "csv_3", label: "Module 3" },
    { value: "csv_4", label: "Module 4" },
    { value: "csv_5", label: "Module 5" },
    { value: "csv_6", label: "Module 6" },
    // { value: "csv_7", label: "Module 7" },
    { value: "csv_8", label: "Module 7" },
    { value: "csv_9", label: "Module 8" },
    { value: "csv_10", label: "Module 9" },
    { value: "csv_11", label: "Module 10" },
    { value: "csv_12", label: "Module 11" },
    { value: "csv_13", label: "Module 12" },
    { value: "csv_14", label: "Module 13" },
    { value: "csv_15", label: "Module 14" },
    { value: "csv_16", label: "Module 15" },
    { value: "csv_17", label: "Module 16" },
  ];

  const [selectedCsv, setSelectedCsv] = useState(csv_0); // Default selected CSV data
  const [key, setKey] = useState(0); // Key for re-rendering Questions component

  const handleChange = (event) => {
    // Update the selected CSV data based on the dropdown selection
    const selectedOption = event.target.value;
    setSelectedCsv(eval(selectedOption)); // Using eval to evaluate the variable name
    setKey((prevKey) => prevKey + 1); // Update the key to force re-render
  };
  return (
    // <div>
    //   <Questions data={combinedData} />
    // </div>
    <div>
      {/* Dropdown menu to select CSV data */}
      <select onChange={handleChange}>
        {csvOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Pass selected CSV data and key to the Questions component */}
      <Questions data={selectedCsv} key={key} />
    </div>
  );
};

export default App;
