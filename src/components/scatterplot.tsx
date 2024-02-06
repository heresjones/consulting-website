import React, { useState } from "react";
import { Scatter } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js";

const generateInventorySequence = (length: number) => {
  const nextTerm = (s: string) => {
    let result = [];
    let i = 0;
    while (i < s.length) {
      let count = 1;
      while (i + 1 < s.length && s[i] === s[i + 1]) {
        i += 1;
        count += 1;
      }
      result.push(`${count}${s[i]}`);
      i += 1;
    }
    return result.join("");
  };

  let term = "1";
  const data = [{ x: 0, y: term.length }];
  for (let i = 1; i < length; i++) {
    term = nextTerm(term);
    data.push({ x: i, y: term.length });
  }
  return data;
};

const ScatterPlotExample = () => {
  const [sequenceLength, setSequenceLength] = useState(10); // Starting with an initial value
  const [inputValue, setInputValue] = useState(""); // To handle the input field value

  const inventoryData = generateInventorySequence(sequenceLength);

  const data = {
    datasets: [
      {
        label: "Inventory Sequence Lengths",
        data: inventoryData,
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options: ChartOptions<"scatter"> = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Term Position",
        },
        type: "linear",
        position: "bottom",
      },
      y: {
        title: {
          display: true,
          text: "Term Length",
        },
        beginAtZero: true,
        type: "linear",
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    const newLength = parseInt(inputValue, 10);
    if (!isNaN(newLength)) {
      setSequenceLength(newLength);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter number of terms"
        />
        <button type="submit">Update Graph</button>
      </form>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterPlotExample;
