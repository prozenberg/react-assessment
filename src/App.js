import './App.css';
import React from "react"
import List from "../src/Components/List"
import { CSVLink, CSVDownload } from "react-csv";
import DummyDates from "./Constants"

function App() {
  return (
    <div className="App">
      <div className="disclaimer">Working with dummy data, dates shown might not be correct compared to calendar</div>
      <CSVLink data={DummyDates} filename={"payment-dates.csv"} className="download-btn">Download data to CSV</CSVLink>
      <List />
    </div>
  );
}

export default App;
