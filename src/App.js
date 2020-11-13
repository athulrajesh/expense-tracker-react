import React from "react";
import ReactDom from "react-dom";
import AddTransaction from "./AddTransaction";
import "./App.css";
import Balance from "./Balance";
import Header from "./Header";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}
ReactDom.render(<App />, document.getElementById("root"));
