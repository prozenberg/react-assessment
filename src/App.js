import './App.css';
import React from "react"
import List from "../src/Components/List"
import { CSVLink } from "react-csv";
import DummyDates from "./Constants/DummyDates"
import PaymentDayHook from "./Hooks/PaymentDayHook"
import BonusDayHook from "./Hooks/BonusDayHook"
import BuildDatesJSON from './Hooks/BuildDatesJSON';

function App() {
  return (
    <div className="App">
      <List />
      <button onClick={console.log(PaymentDayHook(2022, 1))}>Payment Day Hook</button>
      <button onClick={console.log(BonusDayHook(2022, 1))}>Bonus Day Hook</button>
      <button onClick={console.log(BuildDatesJSON(2022))}>Bonus Day Hook</button>
    </div>
  );
}

export default App;
