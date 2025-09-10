import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransactionRow from "../../composant/TransactionRow/TransactionRow";
import Wrapper from "../../composant/wrapper/wrapper";
import "./AccountInfo.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fakeTransactions = [
  {
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: "$8.00",
    balance: "$298.00",
    type: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: "$8.00",
    balance: "$298.00",
    type: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: "$8.00",
    balance: "$298.00",
    type: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: "$8.00",
    balance: "$298.00",
    type: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: "$8.00",
    balance: "$298.00",
    type: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: "$8.00",
    balance: "$298.00",
    type: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },

];

function AccountInfo() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  if (!user) return <p>Loading...</p>;

  return (
    <main className="main">
      {/* Wrapper résumé du compte */}
      <Wrapper
      
  title="Argent Bank Checking (x3448)"
  amount="$48,098.43"
  description="Available balance"
  rightElement={
    <button
      className="close-btn"
      onClick={() => navigate(`/user/${user.token}`)}
      aria-label="Close"
    >
      <FontAwesomeIcon icon={faX} />
    </button>
  }
/>

      {/* Liste des transactions */}
      <section className="transaction-list">
        <div className="transaction-list-header">
          <span>Date</span>
          <span>Description</span>
          <span>Amount</span>
          <span>Balance</span>
        
        </div>
        {fakeTransactions.map((transaction, idx) => (
          <TransactionRow key={idx} transaction={transaction} />
        ))}
      </section>
    </main>
  );
}

export default AccountInfo;