import React from "react";
import ReactDom from "react-dom";
import AddTransaction from "./AddTransaction";
import "./App.css";
import Balance from "./Balance";
import { GlobalProvider } from "./GlobalState";
import Header from "./Header";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
ReactDom.render(<App />, document.getElementById("root"));
